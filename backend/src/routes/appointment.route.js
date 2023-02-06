const { Router } = require("express");
require("dotenv").config();
const { authentication } = require("../middlewares/authentication");

const { AppointmentModel } = require("../models/Appointment.model");

const appointmentsRoutes = Router();

// To get user appointments
appointmentsRoutes.get("/", authentication, async (req, res) => {
  const { userId } = req.body;
  const appointments = await AppointmentModel.find({ userId }).populate(
    "lawyerId"
  );
  res.send(appointments);
});

// To add new appointment
appointmentsRoutes.post("/create", authentication, async (req, res) => {
  const newAppointment = new AppointmentModel(req.body);
  try {
    await newAppointment.save();
    res.send(newAppointment);
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
});

module.exports = {
  appointmentsRoutes,
};
