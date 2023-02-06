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
  Alert,
  AlertIcon,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../Redux/auth/auth.actions";

const SignIn = () => {
  const toast = useToast();
  const { loading, error, errormsg } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginSuccess({ username, password })).then(() => {
        toast({
          title: "SignIn Successful",
          description: "You've successfully signed in",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box align="center">
      <Heading my={"40px"}>Sign In</Heading>
      <Card maxW="lg">
        <CardBody>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
              Login
            </Button>
          ) : (
            <Button variant="solid" colorScheme="blue" onClick={handleSubmit}>
              Login
            </Button>
          )}
        </CardFooter>
      </Card>
      <Text m={5} fontSize={16}>
        Not registered? <Link to={"/signup"}>Sign Up</Link>
      </Text>
      {/* If error exists */}
      {error ? (
        <Box maxW={"lg"}>
          <Alert status="error">
            <AlertIcon />
            {errormsg}
          </Alert>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SignIn;
