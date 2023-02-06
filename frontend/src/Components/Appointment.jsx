import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAppointments } from "../Redux/appointments/appointments.action";
import { bookAppointment } from "../utils/bookAppointment";
import { getDates } from "../utils/getDates";
import { getSlots } from "../utils/getSlots";

const Appointment = ({ lawyer }) => {
  const toast = useToast();
  const dates = getDates();
  const slots = getSlots(lawyer.availability);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user.user);
  const appointments = useSelector((store) => store.appointments.data);
  let bookedDate = appointments
    .filter((el) => el?.lawyerId?._id === lawyer._id)
    .map((el) => [el?.date, el?.time]);
  let bookedSlots = appointments.map((el) => [el.date, el.time].join("-"));
  const token = useSelector((store) => store.auth.token);

  //To get all booked appointments
  useEffect(() => {
    dispatch(getAppointments(token));
  }, []);
  return (
    <Card maxW={"2xl"}>
      <CardBody>
        <Heading fontSize={"24px"} textAlign="left">
          Available slots for next 3 days
        </Heading>
        <Text textAlign="left">
          (To book an appointment, Click on any available slot)
        </Text>
        <Card m={4} bg={"gray.100"}>
          <CardBody>
            <HStack justifyContent={"space-between"}>
              <Flex gap={"5px"}>
                <Box bg="green" height="18px" width={"18px"}></Box>
                <Text fontWeight={"500"}>Available</Text>
              </Flex>
              <Flex gap={"5px"}>
                <Box bg="red" height="18px" width={"18px"}></Box>
                <Text fontWeight={"500"}>Not Available</Text>
              </Flex>
            </HStack>
            <Flex gap={"5px"}>
              <Box bg="#ecc94b" height="18px" width={"18px"}></Box>
              <Text fontWeight={"500"}>
                Have an appointment with other lawyer at this time slot
              </Text>
            </Flex>
          </CardBody>
        </Card>
        {/* mapping for next three days */}
        {dates.map((date) => (
          <Box>
            {Object.keys(lawyer.appointments).includes(date) ? (
              <Box>
                {/* If date exists in appointments list */}
                <Text fontSize={"20px"} m={2} pt={5}>
                  {date}
                </Text>
                {bookedDate.find((el) => el[0] === date) ? (
                  <Box borderTop={"0.5px solid gray"} pt={1}>
                    <Card align="center" m={4} bg={"gray.200"}>
                      <CardBody>
                        <Text>
                          You already have an appointment for this day with{" "}
                          <Link
                            to={`/lawyer/${lawyer._id}`}
                            style={{ color: "green" }}
                          >
                            {lawyer.name}
                          </Link>{" "}
                          at{" "}
                          <Tag>
                            {bookedDate.find((el) => el[0] === date)[1]}
                          </Tag>
                        </Text>
                      </CardBody>
                    </Card>
                  </Box>
                ) : (
                  <Box borderTop={"0.5px solid gray"} pt={1}>
                    {/* mapping for the daywise slots */}
                    {slots.map((el) => {
                      return bookedSlots.includes([date, el].join("-")) ? (
                        <Tooltip
                          hasArrow
                          label={`Already have an appointment at this time (${el})`}
                          bg="red.600"
                        >
                          <Button
                            m={2}
                            cursor={"not-allowed"}
                            colorScheme={"yellow"}
                          >
                            Appointment Scheduled
                          </Button>
                        </Tooltip>
                      ) : lawyer.appointments[date]?.includes(el) ? (
                        <Tooltip hasArrow label="Not Available" bg="red.600">
                          <Button
                            m={2}
                            cursor={"not-allowed"}
                            colorScheme={"red"}
                          >
                            {el}
                          </Button>
                        </Tooltip>
                      ) : (
                        <Tooltip
                          hasArrow
                          label={`Click to book the slot`}
                          bg="green.600"
                        >
                          <Button
                            m={2}
                            colorScheme={"green"}
                            onClick={() =>
                              bookAppointment(
                                lawyer._id,
                                lawyer,
                                user,
                                date,
                                el,
                                toast,
                                dispatch
                              )
                            }
                          >
                            {el}
                          </Button>
                        </Tooltip>
                      );
                    })}
                  </Box>
                )}
              </Box>
            ) : (
              <Box>
                {/* If date doesn't exist in appointments list */}
                <Text fontSize={"20px"} m={2} pt={5}>
                  {date}
                </Text>
                <Box borderTop={"0.5px solid gray"} pt={1}>
                  {/* mapping for the daywise slots */}
                  {slots.map((el) => (
                    <Tooltip
                      hasArrow
                      label={`Click to book the slot`}
                      bg="green.600"
                    >
                      <Button
                        m={2}
                        colorScheme={"green"}
                        onClick={() =>
                          bookAppointment(
                            lawyer._id,
                            lawyer,
                            user,
                            date,
                            el,
                            toast,
                            dispatch
                          )
                        }
                      >
                        {el}
                      </Button>
                    </Tooltip>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </CardBody>
    </Card>
  );
};

export default Appointment;
