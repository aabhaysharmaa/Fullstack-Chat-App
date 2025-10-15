import jwt from "jsonwebtoken";
// Function to generate JWT token

export const generateToken = (userId, res) => {
	const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
		expiresIn: '7d',
	})
	// Set token in HTTP-only cookie
	res.cookie("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production', // set to true in production
		sameSite: 'strict',
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
	})

	return token;
}