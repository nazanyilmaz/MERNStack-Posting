const AuthSchema = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(500).json({ message: " There is already user" });
    }
    if (password.length < 6) {
      return res.status(500).json({ message: "password <6. Invalid!!!" });
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });
    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });
    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthSchema.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "User is not found" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(500).json({ message: "Password in valid!!" });
    }

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });
    res.status(200).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
