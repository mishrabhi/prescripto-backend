const express = require("express");
const { addDoctor, loginAdmin } = require("../controllers/adminControlller");
const upload = require("../middlewares/multer");

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;
