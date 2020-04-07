module.exports = {
  PORT: process.env.PORT || 3000,
  DB: {
    url: process.env.DATABASE_URL,
    logging: false
  }
};
