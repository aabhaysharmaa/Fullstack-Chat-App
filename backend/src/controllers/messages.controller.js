const getAllMessages = async (req, res) => {
	try {
		res.send("Get All Messages");
	} catch (error) {
		console.log("Error in getAllMessages controller", error.message);
	}
}

const getMessages = async (req, res) => {
	try {
		const { from, to } = req.params;
		res.send("Get Messages between " + from + " and " + to);
	} catch (error) {
		console.log("Error in getMessages controller", error.message);
	}
}

const sendMessage = async (req, res) => {
	try {
		const { from, to, message } = req.body;
		res.send("Message sent from " + from + " to " + to + ": " + message);
	} catch (error) {
		console.log("Error in sendMessage controller", error.message);
	}
}

export { sendMessage, getMessages , getAllMessages };		