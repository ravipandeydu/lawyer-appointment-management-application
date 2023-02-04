import { Box, Wrap } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lawyer from "../Components/Lawyer";
import SingleLawyer from "../Components/SingleLawyer";
import { bookAppointments, getLawyers } from "../Redux/lawyers/lawyers.actions";

const Home = () => {
  const token = localStorage.getItem("token");
  const lawyers = useSelector((state) => state.lawyers.data);
  const dispatch = useDispatch();
  // const date = new Date();
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  // const dates = [
  //   `${day}-${month}-${year}`,
  //   `${day + 1}-${month}-${year}`,
  //   `${day + 2}-${month}-${year}`,
  // ];
  // const start = Number(availability.trim().split("-")[0].substring(0, 2));
  // const end = Number(availability.trim().split("-")[1].substring(0, 2));
  // let arr = [];
  // for (let i = start; i < end; i++) {
  //   arr.push([`${i}:00`, `${i + 1}:00`].join("-"));
  // }
  // console.log();
  // console.log(day, month, year);
  useEffect(() => {
    dispatch(getLawyers(token));
  }, []);
  // function bookApp(id, lawyer, date, slot) {
  //   dispatch(
  //     bookAppointments(token, id, {
  //       ...lawyer,
  //       appointments: { date: [slot] },
  //     })
  //   );
  // }
  return (
    <Wrap spacing={"50px"} mx={10} my={5}>
      {lawyers?.map((lawyer) => (
        <Lawyer
          key={lawyer._id}
          lawyer={lawyer}
          // handleBook={() => bookApp(lawyer._id, lawyer)}
          // dates={dates}
        />
      ))}
    </Wrap>
  );
};

export default Home;
