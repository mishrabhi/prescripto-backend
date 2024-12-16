const express = require("express");
const { addDoctor, loginAdmin } = require("../controllers/adminControlller");
const upload = require("../middlewares/multer");
const authAdmin = require("../middlewares/authAdmin");

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;
