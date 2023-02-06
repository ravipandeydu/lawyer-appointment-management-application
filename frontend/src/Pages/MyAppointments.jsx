import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../Redux/appointments/appointments.action";
import MyAppointmentSkeleton from "../Components/skeletons/MyAppointmentSkeleton";

const MyAppointments = () => {
  const token = localStorage.getItem("token");
  const appointments = useSelector((store) => store.appointments.data);
  const loading = useSelector((store) => store.appointments.loading);
  const error = useSelector((store) => store.appointments.error);
  const dispatch = useDispatch();

  //To get all booked appointments
  useEffect(() => {
    dispatch(getAppointments(token));
  }, []);
  return (
    <Box align="center" maxW={"xl"} margin="auto">
      {/* When loading the data */}
      {loading ? (
        <MyAppointmentSkeleton />
      ) : (
        <Box>
          {/* After successful data fetching */}
          {appointments.length > 0 ? (
            appointments?.map((appointment) => (
              <Card align="center" m={4} bg={"gray.200"}>
                <CardBody>
                  <Text>
                    Appointment with {appointment.lawyerId.name}(
                    {appointment.lawyerId.speciality} Lawyer) at{" "}
                    {appointment.time}, {appointment.date}
                  </Text>
                </CardBody>
              </Card>
            ))
          ) : (
            <Card align="center" m={4} bg={"gray.200"}>
              {/* If user have no appointments */}
              <CardBody>
                <Text>You have no appointment</Text>
              </CardBody>
            </Card>
          )}
        </Box>
      )}
      {/* If error in fetching the lawyer */}
      {error ? (
        <Card align="center" m={4} bg={"gray.200"}>
          <CardBody>
            <Image
              src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
              alt="Something Went Wrong"
            />
          </CardBody>
        </Card>
      ) : (
        ""
      )}
    </Box>
  );
};

export default MyAppointments;
