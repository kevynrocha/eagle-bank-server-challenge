import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';
import logger from '../logger';

const verifyAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new Error('JWT is required');
    }

    const [, token] = authHeader.split(' ');

    try {
      verify(token, authConfig.jwt.secret);
    } catch (e) {
      throw new Error('JWT with invalid signature');
    }

    return next();
  } catch (e) {
    logger.error(e.message);
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};

export default verifyAuthentication;
