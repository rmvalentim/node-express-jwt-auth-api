import express from 'express';
import { admin } from '../controllers/adminController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
import authorizeRole from '../middleware/roleMiddleware.js';
const router = express.Router();
import ROLES from '../constants/roles.js';

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Acessa o painel adminsitrativo (requer autenticação e permissões de admin)
 *     tags: [Admin Panel]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso concedido ao painel administrativo
 *       401:
 *         description: Não autorizado
 */
router.get('/admin', authenticateJWT, authorizeRole(ROLES.ADMIN), admin);

export default router;