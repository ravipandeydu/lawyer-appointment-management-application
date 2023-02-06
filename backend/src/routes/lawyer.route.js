const { Router } = require("express");
require("dotenv").config();
const { authentication } = require("../middlewares/authentication");

const { LawyerModel } = require("../models/Lawyer.model");

const lawyerRoutes = Router();

// To get all lawyers
lawyerRoutes.get("/", authentication, async (req, res) => {
  const lawyers = await LawyerModel.find();
  res.send(lawyers);
});

// To add new lawyer
lawyerRoutes.post("/create", async (req, res) => {
  const newlawyer = new LawyerModel(req.body);
  try {
    await newlawyer.save();
    res.send(newlawyer);
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
});

// To edit lawyer
lawyerRoutes.patch("/edit/:lawyerId", authentication, async (req, res) => {
  const { lawyerId } = req.params;
  const updatedlawyer = await LawyerModel.findOneAndUpdate(
    { _id: lawyerId },
    req.body
  );
  if (updatedlawyer) {
    res.send(updatedlawyer);
  } else {
    res.send("couldn't update");
  }
});

module.exports = {
  lawyerRoutes,
};
