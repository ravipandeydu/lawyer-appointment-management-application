import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import SingleLawyer from "./Components/SingleLawyer";
import MyAppointments from "./Components/MyAppointments";
// import AllEvents from "./Pages/AllEvents";
// import MyEvents from "./Pages/MyEvents";
// import MyBookedEvents from "./Pages/MyBookedEvents";

function App() {
  return (
    <div className="App">
      <Navbar />
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
}

export default App;
