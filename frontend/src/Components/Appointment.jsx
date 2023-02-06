import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAppointment } from "../utils/bookAppointment";
import { getDates } from "../utils/getDates";
import { getSlots } from "../utils/getSlots";

const Appointment = ({ lawyer }) => {
  const toast = useToast();
  const dates = getDates();
  const slots = getSlots(lawyer.availability);
  console.log(slots);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user.user);
  return (
    <Card w={"2xl"}>
      <CardBody>
        <Heading fontSize={"24px"} textAlign="left">
          Available slots for next 3 days
        </Heading>
        <Text textAlign="left">
          (To book an appointment, Click on any available slot)
        </Text>
        {/* mapping for next three days */}
        {dates.map((date) => (
          <Box>
            {Object.keys(lawyer.appointments).includes(date) ? (
              <Box>
                {/* If date exists in appointments list */}
                <Text fontSize={"20px"} m={2} pt={5}>
                  {date}
                </Text>
                <Box borderTop={"0.5px solid gray"} pt={1}>
                  {/* mapping for the daywise slots */}
                  {slots.map((el) => (
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
                      disabled={lawyer.appointments[date]?.includes(el)}
                    >
                      {el}
                    </Button>
                  ))}
                </Box>
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
