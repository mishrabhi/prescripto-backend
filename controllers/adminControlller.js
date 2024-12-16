const validator = require("validator");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary");
const Doctor = require("../schema/doctor.model");
//API for adding doctor

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;
    //check for all data to add new doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json("missing details");
    }

    //validate email format
    if (!validator.isEmail(email)) {
      return res.json("please enter valid email");
    }

    //validate password
    if (password.length < 4) {
      return res.json("password should be more than 4 characters");
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
    };
    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();
    res.status(201).json({ message: `doctor added successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Something went wrong!` });
  }
};

module.exports = addDoctor;
