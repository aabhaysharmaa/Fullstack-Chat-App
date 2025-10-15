import jwt from "jsonwebtoken";
// Function to generate JWT token

export const generateToken = (userId, res) => {
	const { JWT_SECRET } = process.env;
	if (!JWT_SECRET) {
		throw new Error("JWT_SECRET is not defined in environment variables");
	}
	const token = jwt.sign({ id: userId }, JWT_SECRET, {
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