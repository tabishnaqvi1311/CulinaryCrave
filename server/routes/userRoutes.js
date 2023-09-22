const express = require("express");
const router = express.Router();
const { signup, login } = require("../controller/userController");

// app.get("/getAllUsers")
router.post("/signup", signup);
router.post("/login", login)

// app.post("/forgotPassword");
// app.post("/resetPassword");

module.exports = router;