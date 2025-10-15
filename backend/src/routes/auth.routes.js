import express from 'express';

const routes = express.Router();
import { signUpUser, loginUser, logOutUser } from '../controllers/auth.controller.js';


routes.post('/signUp', signUpUser);
routes.post('/login', loginUser);
routes.post('/logout', logOutUser);

export default routes;
