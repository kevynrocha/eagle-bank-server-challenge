import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import User from '../models/user.model';

const store = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
        password
      }
    });

    if (!user) {
      throw new Error('Invalid email/password');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ id: user.id }, secret, {
      expiresIn
    });

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        token
      }
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
};

export default {
  store
};
