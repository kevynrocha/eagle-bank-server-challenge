import { Router } from 'express';

import SessionController from '../controllers/sessions.controller';
import validationMiddleware from '../middlewares/validation';
import sessionValidationRules from '../validations/sessions.validations';

const router = Router();

router.post(
  '/',
  sessionValidationRules,
  validationMiddleware,
  SessionController.store
);

export default router;
