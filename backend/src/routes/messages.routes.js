import express from 'express';

const router = express.Router();
import { sendMessage, getMessages, getAllMessages } from '../controllers/messages.controller.js';

// Send a new message
router.post('/', sendMessage);
router.get('/messages', getAllMessages);
// Get messages between two users
router.get('/:from/:to', getMessages);

export default router;