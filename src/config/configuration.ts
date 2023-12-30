console.log('process.env =', process.env.ALLOWED_ORIGINS);
export default () => ({
  nodeEnv: process.env.NODE_ENV || 'dev',
  port: process.env.PORT,
  corsConfig: {
    origin: process.env.ALLOWED_ORIGINS.split(','),
  },
});
