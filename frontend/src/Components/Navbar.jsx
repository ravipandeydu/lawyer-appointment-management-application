import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/auth/auth.actions";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const isAuth = useSelector((state) => state.auth.isAuth);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user).user;
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <Flex
      bg={useColorModeValue("red.200", "teal")}
      borderBottom="0.5px solid #b1b3b5"
      px={6}
      align="center"
      justify="center"
      wrap="nowrap"
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <Link to="/">
        <Text px={6} py={2} fontSize="xl">
          Lawyer
        </Text>
      </Link>
      <Spacer />
      <Link to="/">
        <Text px={6} py={2} fontSize="xl">
          All Lawyers
        </Text>
      </Link>
      <Link to="/myappointments">
        <Text px={6} py={2} fontSize="xl">
          My Appointments
        </Text>
      </Link>
      <Spacer />
      {token ? (
        <Flex gap={"10px"}>
          <Box px={6} py={2} fontWeight="600" fontSize={"18px"}>
            {user?.user?.username}
          </Box>
          <Button px={6} py={2} onClick={handleLogout}>
            Logout
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      ) : (
        <Flex>
          <Link to="/signin">
            <Text px={6} py={2}>
              Sign In
            </Text>
          </Link>
          <Link to="/signup">
            <Text px={6} py={2}>
              Sign Up
            </Text>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
