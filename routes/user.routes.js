import express from "express";
import { login, logout, register } from "../controllers/user.controllers.js";

const router = express.Router();

router.post('/register', register)
router.post('/logout', logout)
router.get('/login', login)

export default router;