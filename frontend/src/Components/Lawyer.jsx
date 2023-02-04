import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AppointmentSlots from "./AppointmentSlots";

const Lawyer = ({ lawyer }) => {
  return (
    <Card maxW="sm" _hover={{ bg: "gray.100" }}>
      <CardBody>
        <Link to={`/lawyer/${lawyer._id}`}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "100%" }}
            src={lawyer.img}
            alt="Caffe Latte"
          />
          <Stack mt="6" spacing="3">
            <Heading textAlign={"left"} size="md">
              {lawyer.name}
            </Heading>
            <Text textAlign={"left"} fontSize="sm">
              {lawyer.speciality} Lawyer
            </Text>
            <Flex textAlign={"left"}>
              <Heading fontSize={"16px"} mr={1}>
                Availability:{" "}
              </Heading>{" "}
              <Text fontSize={"16px"}>{lawyer.availability}</Text>
            </Flex>
            <Flex textAlign={"left"}>
              <Heading fontSize={"16px"} mr={1}>
                Cost Per Appointment:{" "}
              </Heading>
              <Text fontSize={"16px"}>{lawyer.cost_per_appointment}</Text>
            </Flex>
          </Stack>
        </Link>
      </CardBody>
      <Divider />
      <CardFooter>
        <AppointmentSlots lawyer={lawyer} />
      </CardFooter>
    </Card>
  );
};

export default Lawyer;
