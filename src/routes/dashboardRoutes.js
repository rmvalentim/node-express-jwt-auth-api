import express from 'express';
import { dashboard } from '../controllers/dashboardController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
import authorizeRole from '../middleware/roleMiddleware.js';
const router = express.Router();
import ROLES from '../constants/roles.js';

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Acessa o dashboard (requer autenticação)
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso concedido ao dashboard
 *       401:
 *         description: Não autorizado
 */
router.get('/dashboard', authenticateJWT, authorizeRole(ROLES.ADMIN,ROLES.USER), dashboard);

export default router;