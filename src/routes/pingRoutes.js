import express from 'express';
import { ping } from '../controllers/pingController.js';
const router = express.Router();

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Retorna "pong"
 *     tags: [Ping]
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 */
router.get('/ping', ping);

export default router;