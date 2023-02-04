import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import React from "react";

const MyAppointmentSkeleton = () => {
  return (
    <Card align="center" m={4} bg={"gray.200"}>
      <CardBody>
        <Skeleton height="20px" />
      </CardBody>
    </Card>
  );
};

export default MyAppointmentSkeleton;
