import { Box, SimpleGrid } from "@chakra-ui/react";
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
  useEffect(() => {
    dispatch(getLawyers(token));
  }, []);
  return (
    <Box mx={10} my={5}>
      {loading ? (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          <LawyerSkeleton />
          <LawyerSkeleton />
          <LawyerSkeleton />
          <LawyerSkeleton />
          <LawyerSkeleton />
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
          {lawyers?.map((lawyer) => (
            <Lawyer key={lawyer._id} lawyer={lawyer} />
          ))}
        </SimpleGrid>
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

export default Home;
