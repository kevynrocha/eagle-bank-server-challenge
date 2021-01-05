import { Sequelize } from 'sequelize';

const connection = new Sequelize('sqlite::memory:', {
  logging: false
});

connection.sync({ force: true });

export default connection;
