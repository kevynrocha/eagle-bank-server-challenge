import { body, ValidationChain } from 'express-validator';

const userValidationRules = (): ValidationChain[] => {
  return [
    body('email', 'Required').notEmpty().isEmail().withMessage('Invalid email'),
    body('password', 'Required')
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage('Min Length: 6 characters'),
  ];
};

export default userValidationRules();
