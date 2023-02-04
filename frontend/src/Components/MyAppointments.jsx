import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../Redux/appointments/appointments.action";

const MyAppointments = () => {
  const token = localStorage.getItem("token");
  const appointments = useSelector((store) => store.appointments.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppointments(token));
  }, []);
  return (
    <Box align="center" maxW={"xl"} margin="auto">
      {appointments.length > 0 ? (
        <Box>
          {appointments?.map((appointment) => (
            <Card align="center" m={4} bg={"gray.200"}>
              <CardBody>
                <Text>
                  Appointment with {appointment.lawyerId.name}(
                  {appointment.lawyerId.speciality} Lawyer) at{" "}
                  {appointment.time}, {appointment.date}
                </Text>
              </CardBody>
            </Card>
          ))}
        </Box>
      ) : (
        <Text>You have no appointment</Text>
      )}
    </Box>
  );
};

export default MyAppointments;
