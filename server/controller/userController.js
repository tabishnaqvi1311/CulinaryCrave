const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) return res.status(400).json("Fill in all the fields");

    if (!validator.isEmail(email)) return res.status(400).json("incorrect email");

    if (!validator.isStrongPassword(password)) return res.status(400).json("weak password");

    if (username.length < 5) return res.status(400).json("username must be larger than 5 characters");

    const doesEmailAlreadyExist = await User.findOne({ email });
    console.log(doesEmailAlreadyExist, email)
    if (doesEmailAlreadyExist) return res.status(400).json("user with that email already exists");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    try {
        const newUser = await User.create({
            username: username,
            email: email,
            password: hash
        })
        const token = jwt.sign({ userId: newUser._id }, process.env.SECRET, { expiresIn: "5d" });

        return res.status(201).json({ newUser, token });

    } catch (e) {
        return res.status(500).json({ "Internal Server Error": e.message });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) return res.status(400).json("fill in the fields")

    try {
        const doesUsernameExist = await User.findOne({ username });
        if (!doesUsernameExist) return res.status(404).json("user not found");

        const doesPasswordMatch = doesUsernameExist.password;
        if (doesPasswordMatch !== password) return res.status(403).json("passwords do not match");

        const token = jwt.sign({ userId: doesUsernameExist._id }, process.env.SECRET, { expiresIn: '5d' });

        return res.status(200).json({ token });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({"Internal Server Error": error.message})
    }

}

module.exports = { login, signup };