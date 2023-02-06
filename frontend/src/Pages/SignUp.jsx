import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  FormLabel,
  Input,
  Heading,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupSuccess } from "../Redux/auth/auth.actions";

const SignUp = () => {
  const toast = useToast();
  const { loading } = useSelector((state) => state.auth);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    try {
      dispatch(signupSuccess({ username, password })).then(() => {
        toast({
          title: "SignUp Successful",
          description: "You've successfully signed up",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/signin");
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box align={"center"}>
      <Heading my={"40px"}>Sign Up</Heading>
      <Card maxW="lg">
        <CardBody>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onKeyDown={(event) => {
              if (event.code === "Space") event.preventDefault();
            }}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </CardBody>
        <Divider />
        <CardFooter>
          {loading ? (
            <Button
              isLoading
              loadingText="Loading"
              colorScheme="teal"
              variant="outline"
              spinnerPlacement="end"
            >
              Signup
            </Button>
          ) : (
            <Button variant="solid" colorScheme="blue" onClick={handleSignUp}>
              Sign Up
            </Button>
          )}
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SignUp;
