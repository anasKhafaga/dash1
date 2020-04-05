module.exports = {
  DB_URI: process.env.MONGO_URI,
  CACHE: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
};