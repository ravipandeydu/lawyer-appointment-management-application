import { Box, Card, CardBody, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lawyer from "../Components/Lawyer";
import LawyerSkeleton from "../Components/skeletons/LawyerSkeleton";
import { getLawyers } from "../Redux/lawyers/lawyers.actions";

const Home = () => {
  const token = localStorage.getItem("token");
  const lawyers = useSelector((state) => state.lawyers.data);
  const loading = useSelector((state) => state.lawyers.loading);
  const error = useSelector((state) => state.lawyers.error);
  const dispatch = useDispatch();

  //To get all lawyer
  useEffect(() => {
    dispatch(getLawyers(token));
  }, []);

  return (
    <Box mx={10} my={5}>
      {loading ? (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          {/* When loading the data */}
          <LawyerSkeleton />
          <LawyerSkeleton />
          <LawyerSkeleton />
          <LawyerSkeleton />
          <LawyerSkeleton />
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          {/* After successful data fetching */}
          {lawyers?.map((lawyer) => (
            <Lawyer key={lawyer._id} lawyer={lawyer} />
          ))}
        </SimpleGrid>
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

export default Home;
