const jwt = require("jsonwebtoken");

//Admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({ message: `Not authorized to login` });
    }
    const decodedToken = jwt.verify(atoken, process.env.JWT_SECRET);
    if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ message: `Not authorized to login` });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ message: `Something went wrong` });
  }
};

module.exports = authAdmin;
