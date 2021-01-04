import { Request, Response } from 'express';

import users from '../database/users';

const index = async (_: Request, res: Response): Promise<Response> => {
  try {
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

export default {
  index
};
