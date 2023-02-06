import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Appointment from "../Components/Appointment";
import AppointmentHistory from "../Components/AppointmentHistory";

const SingleLawyer = () => {
  const { id } = useParams();
  let lawyer = useSelector((store) => store.lawyers.data).find(
    (el) => el._id === id
  );
  return (
    <Box width={"80%"} margin="auto" my={10}>
      <Flex gap={"40px"}>
        <Box width={"50%"}>
          <Image src={lawyer.img} alt={lawyer.name} width="100%" />
        </Box>
        <Stack textAlign={"left"}>
          <Heading textAlign={"left"} size="xl">
            {lawyer.name}
          </Heading>
          <Badge
            p={"5px 10px"}
            colorScheme="green"
            textTransform={"capitalize"}
            fontSize="md"
            width={"fit-content"}
          >
            {lawyer.speciality} Lawyer
          </Badge>
          <Flex pt={"15px"}>
            <Flex alignItems={"center"} textAlign={"left"}>
              <Heading fontSize={"lg"} mr={1} color="#f97316">
                Availability:
              </Heading>
              <Text fontSize={"lg"} fontWeight={500}>
                {lawyer.availability}
              </Text>
            </Flex>
            <Spacer />
            <Flex textAlign={"left"} alignItems={"center"}>
              <Heading fontSize={"lg"} mr={1} color="#f97316">
                Cost Per Appointment:{" "}
              </Heading>
              <Text fontSize={"lg"} fontWeight={500}>
                {lawyer.cost_per_appointment}
              </Text>
            </Flex>
          </Flex>
          <Appointment lawyer={lawyer} />
          <AppointmentHistory lawyer={lawyer} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default SingleLawyer;
