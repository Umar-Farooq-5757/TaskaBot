import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Signup
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password:hashedPassword });
    const token = generateToken(user._id);
    res.json({ success: true, token });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

// SIGNIN / LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = generateToken(user._id);
        return res.json({ success: true, token });
      }
    }
    return res.json({ success: false, message: "Invalid email or password" });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

// GET USER
const getUser = async(req,res)=>{
  try {
    const user = req.user;
    return res.json({success:true, user})
  } catch (err) {
    return res.json({success:false, message:err.message})
  }
}

export {registerUser, loginUser, getUser}