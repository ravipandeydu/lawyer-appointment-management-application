import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Skeleton,
  Stack,
} from "@chakra-ui/react";

const LawyerSkeleton = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Skeleton height="250px" width={"344px"} />
        <Stack mt="6" spacing="3">
          <Skeleton height="30px" width={"100px"} />
          <Skeleton height="20px" width={"125px"} />
          <Skeleton height="20px" width={"150px"} />
          <Skeleton height="20px" width={"200px"} />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Skeleton height="40px" width={"140px"} />
      </CardFooter>
    </Card>
  );
};

export default LawyerSkeleton;
