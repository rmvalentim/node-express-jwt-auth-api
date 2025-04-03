import express from 'express';
import { dashboard } from '../controllers/dashboardController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
const router = express.Router();

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Acessa o painel de controle (requer autenticação)
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso concedido ao dashboard
 *       401:
 *         description: Não autorizado
 */
router.get('/dashboard', authenticateJWT, dashboard);

export default router;