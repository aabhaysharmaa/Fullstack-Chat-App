import express from 'express';

const routes = express.Router();
import { registerUser, loginUser, logOutUser } from '../controllers/auth.controller.js';

// Register route
routes.post('/register', registerUser);

// Login route
routes.post('/login', loginUser);
routes.post('/logout', logOutUser);

export default routes;
