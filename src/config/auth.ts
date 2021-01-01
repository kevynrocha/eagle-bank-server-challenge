export default {
  jwt: {
    secret: process.env.JWT_SECRET || 'SECRET',
    expiresIn: process.env.JWT_EXPIRES,
  },
};
