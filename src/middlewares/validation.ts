import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

interface Error {
  [key: string]: string;
}

const validate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: Error[] = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

export default validate;
