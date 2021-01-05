import { Router } from 'express';

import UserController from '../controllers/users.controller';
import authMiddleware from '../middlewares/auth';
import validationMiddleware from '../middlewares/validation';
import usersValidationRules from '../validations/users.validations';

const router = Router();

router.get('/', authMiddleware, UserController.index);
router.post(
  '/',
  usersValidationRules,
  validationMiddleware,
  UserController.store
);

export default router;
