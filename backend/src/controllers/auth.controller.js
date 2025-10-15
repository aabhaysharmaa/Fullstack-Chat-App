import { generateToken } from "../libs/utils.js";
import User from "../models/user.modal.js";
import bcrypt from "bcryptjs";
export const loginUser = async (req, res, next) => {
}

export const signUpUser = async (req, res, next) => {
	try {
		const { email, password, username } = req.body;
		if (!email || !password || !username) {
			return res.status(400).json({ message: "All fields are required" }); 
		}
		if (password.length < 6) {
			return res.status(400).json({ message: "Password must be at least 6 characters long" });
		}

		// check if emails valid; regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ message: "Invalid email format" });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(409).json({ message: "User already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({ email, password: hashedPassword, username });
		if (newUser) {
			generateToken(newUser._id, res);
			await newUser.save();
			return res.status(201).json({
				message: "User registered successfully", newUser
			});
			// TODO : send a welcome email here

		} else {
			res.status(400).json({ message: "Invalid user data" });
		}

	} catch (error) {
		console.log("Error in loginUser controller", error.message);
		next(error);
	}
}

export const logOutUser = (req, res, next) => {
	try {

	} catch (error) {
		console.log("Error in loginUser controller", error.message);
		next(error);
	}
}