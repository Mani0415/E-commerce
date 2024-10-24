import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";


//signup registration
export const RegisterUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    } else {
      const newuser = new User({ name, email, password });
      user = await newuser.save();
    }
    return res.status(201).json({ message: "successfully registered", user });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//login verifycation
export const verifySignup = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "invaild Email Adderss",
      });
    } else if (user.password != password) {
      return res.status(400).json({
        message: "wrong password",
      });
    }
    const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    return res.status(200).json({
      message: "login successfull",
      token,
      user
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//My profile
export const Myprofile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
