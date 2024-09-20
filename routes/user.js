import express from 'express';
import { registerUser } from '../controller/user.js';

const router = express.Router();

// /api/users/register
router.post('/register', registerUser); 

export default router;
