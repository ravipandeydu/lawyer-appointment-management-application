import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addAppointment } from "../Redux/appointments/appointments.action";
import { bookAppointments, getLawyers } from "../Redux/lawyers/lawyers.actions";
import { bookAppointment } from "../utils/bookAppointment";
import { getDates } from "../utils/getDates";
import { getSlots } from "../utils/getSlots";
import Appointment from "./Appointment";
import AppointmentHistory from "./AppointmentHistory";
import AppointmentSlots from "./AppointmentSlots";

const SingleLawyer = () => {
  const { id } = useParams();
  let lawyer = useSelector((store) => store.lawyers.data).find(
    (el) => el._id === id
  );
  return (
    <Box width={"80%"} margin="auto" my={10}>
      <Flex gap={"40px"}>
        <Box width={"50%"}>
          <Image src={lawyer.img} alt={lawyer.name} />
        </Box>
        <Stack textAlign={"left"}>
          <Heading textAlign={"left"} size="xl">
            {lawyer.name}
          </Heading>
          <Badge
            p={"5px 10px"}
            // variant="solid"
            colorScheme="green"
            textTransform={"capitalize"}
            fontSize="md"
            width={"fit-content"}
          >
            {lawyer.speciality} Lawyer
          </Badge>
          {/* <Tag textAlign={"left"} fontSize="md" width={"fit-content"}>
            {lawyer.speciality} Lawyer
          </Tag> */}
          <Flex pt={"15px"}>
            <Flex alignItems={"center"} textAlign={"left"}>
              <Heading fontSize={"lg"} mr={1} color="#f97316">
                Availability:
              </Heading>
              <Text fontSize={"lg"} fontWeight={500}>{lawyer.availability}</Text>
            </Flex>
            <Spacer />
            <Flex textAlign={"left"} alignItems={"center"}>
            <Heading fontSize={"lg"} mr={1} color="#f97316">
              Cost Per Appointment:{" "}
            </Heading>
            <Text fontSize={"lg"} fontWeight={500}>{lawyer.cost_per_appointment}</Text>
          </Flex>
          </Flex>
          {/* <Flex alignItems={"center"} textAlign={"left"}>
            <Heading fontSize={"lg"} mr={1}>
              Availability:
            </Heading>
            <Text fontSize={"lg"}>{lawyer.availability}</Text>
          </Flex>
          <Flex textAlign={"left"} alignItems={"center"}>
            <Heading fontSize={"lg"} mr={1}>
              Cost Per Appointment:{" "}
            </Heading>
            <Text fontSize={"lg"}>{lawyer.cost_per_appointment}</Text>
          </Flex> */}
          {/* <Heading>{lawyer.name}</Heading>
          <Tag>{lawyer.speciality} lawyer</Tag>
          <Text>Availability: {lawyer.availability}</Text>
          <Text>Cost Per Appointment: {lawyer.cost_per_appointment}</Text> */}
          <Appointment lawyer={lawyer} />
          <AppointmentHistory lawyer={lawyer} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default SingleLawyer;
