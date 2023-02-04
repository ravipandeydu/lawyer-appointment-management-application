const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    img: { type: String, require: true },
    speciality: { type: String, require: true },
    availability: { type: String, require: true },
    cost_per_appointment: { type: Number, require: true },
    appointments: { type: Object, require: true, default: {} },
  },
  { timestamps: true }
);

const LawyerModel = mongoose.model("lawyer", lawyerSchema);

module.exports = {
  LawyerModel,
};
