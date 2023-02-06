import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import PrivateRoute from "../Components/PrivateRoute";
import SingleLawyer from "../Pages/SingleLawyer";
import MyAppointments from "../Pages/MyAppointments";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/lawyer/:id"
          element={
            <PrivateRoute>
              <SingleLawyer />
            </PrivateRoute>
          }
        />
        <Route
          path="/myappointments"
          element={
            <PrivateRoute>
              <MyAppointments />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
