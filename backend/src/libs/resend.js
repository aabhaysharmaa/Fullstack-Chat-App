// resend.js
import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();
console.log("Resend API Key:", process.env.RESEND_API_KEY); // Debugging line
export const resendClient = new Resend(process.env.RESEND_API_KEY);

export const senderEmail = {
  email: process.env.EMAIL_FROM,
  name: process.env.EMAIL_FROM_NAME
};
