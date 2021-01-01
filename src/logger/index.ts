import pino from 'pino';

const logger = pino({
  prettyPrint: {
    levelFirst: true,
    colorize: true,
    translateTime: 'dd-mm-yyyy HH:MM:ss',
  },
});

export default logger;
