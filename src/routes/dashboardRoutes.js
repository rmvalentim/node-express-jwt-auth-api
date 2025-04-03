import express from 'express';
import { dashboard } from '../controllers/dashboardController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/dashboard', authenticateJWT, dashboard);

export default router;