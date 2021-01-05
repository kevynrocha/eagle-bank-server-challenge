import { Request, Response } from 'express';

import User from '../models/user.model';

const index = async (_: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.findAll();

    const formattedUsers = users.map(user => ({
      id: user.id,
      email: user.email
    }));

    return res.json({
      users: formattedUsers
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
};

const store = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ where: { email } });

    if (existUser) {
      throw new Error('User already exists');
    }

    const user = await User.create({
      email,
      name,
      password
    });

    const formattedUser = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    return res.json(formattedUser);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
};

export default {
  index,
  store
};
