import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../Redux/appointments/appointments.action";
import MyAppointmentSkeleton from "./skeletons/MyAppointmentSkeleton";

const MyAppointments = () => {
  const token = localStorage.getItem("token");
  const appointments = useSelector((store) => store.appointments.data);
  const loading = useSelector((store) => store.appointments.loading);
  const error = useSelector((store) => store.appointments.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppointments(token));
  }, []);
  return (
    <Box align="center" maxW={"xl"} margin="auto">
      {appointments.length > 0 ? (
        <Box>
          {appointments?.map((appointment) =>
            loading ? (
              <MyAppointmentSkeleton />
            ) : (
              <Card align="center" m={4} bg={"gray.200"}>
                <CardBody>
                  <Text>
                    Appointment with {appointment.lawyerId.name}(
                    {appointment.lawyerId.speciality} Lawyer) at{" "}
                    {appointment.time}, {appointment.date}
                  </Text>
                </CardBody>
              </Card>
            )
          )}
        </Box>
      ) : (
        <Card align="center" m={4} bg={"gray.200"}>
          <CardBody>
            <Text>You have no appointment</Text>
          </CardBody>
        </Card>
      )}
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
