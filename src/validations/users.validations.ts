import { body, ValidationChain } from 'express-validator';

const userValidationRules = (): ValidationChain[] => {
  return [
    body('email', 'Required').notEmpty().isEmail().withMessage('Invalid email'),
    body('name', 'Required')
      .notEmpty()
      .isLength({ min: 2 })
      .withMessage('Min Length: 2 characters'),
    body('password', 'Required')
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage('Min Length: 6 characters')
  ];
};

export default userValidationRules();
