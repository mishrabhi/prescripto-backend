const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    adress: {
      type: Object,
      required: true,
    },
    slots_booked: {
      type: Object,
      default: {},
    },
  },
  { minimize: false, timestamps: true }
);

module.exports = mongoose.model("doctor", doctorSchema);