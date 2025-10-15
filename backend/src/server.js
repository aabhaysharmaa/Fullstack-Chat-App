import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

import connectDB from './libs/DB/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/messages.routes.js';
import cors from 'cors';

//middleware

app.use(cors({
	origin: 'http://localhost:3000', // Replace with your frontend URL
	credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);











// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status).send(err.message || 'Internal Server Error');
});


const expressAsyncHandler = async () => {
	try {
		await connectDB();
		console.log('Database connected successfully');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error(error.message);
	}
}

expressAsyncHandler();