import { Router } from 'express';

import UserController from '../controllers/users.controller';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.get('/', authMiddleware, UserController.index);

export default router;
