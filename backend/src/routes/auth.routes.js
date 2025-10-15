import express from 'express';

const routes = express.Router();
import { signUpUser, loginUser, logOutUser } from '../controllers/auth.controller.js';

// Register route
routes.post('/signUp', signUpUser);

// Login route
routes.post('/login', loginUser);
routes.post('/logout', logOutUser);

export default routes;
