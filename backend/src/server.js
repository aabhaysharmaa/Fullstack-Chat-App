import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

import connectDB from './libs/DB/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/messages.routes.js';
import cors from "cors";
import cookieParser from 'cookie-parser';
//middleware

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);











// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message || 'Internal Server Error');
});


const startServer = async () => {
  try {
    await connectDB();
    console.log('✅ Database connected successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error connecting to database:', error.message);
    process.exit(1); // exit process if DB connection fails
  }
};

startServer();
