import { resendClient, senderEmail } from '../libs/resend.js';
import { welcomeEmailTemplate } from '../emails/emailTemplates.js';
export const sendWelcomeEmail = async (email, name, clientURL) => {
	const { data, error } = await resendClient.emails.send({
		from: `${senderEmail.name} <${senderEmail.email}>`,
		to: email,
		subject: 'Welcome to Chatify!',
		html: welcomeEmailTemplate(name, clientURL)
	});
	if (error) {
		console.error('Error sending welcome email:', error);
	}
	console.log('Welcome email sent:', data);


}
