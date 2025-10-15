export const loginUser = (req, res, next) => {
	try {
		res.send("Login User");
	} catch (error) {
		console.log("Error in loginUser controller", error.message);
		next(error);
	}
}

export const registerUser = (req, res, next) => {
	try {
		res.send("Register User");
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