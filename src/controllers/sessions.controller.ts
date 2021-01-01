import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import users from '../database/users';

const store = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  try {
    const user = users.find(
      user => user.email === email && user.password === password,
    );

    if (!user) {
      throw new Error('Invalid email/password');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ id: user.id }, secret, {
      expiresIn,
    });

    return res.json({
      user,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export default {
  store,
};
