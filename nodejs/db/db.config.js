module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'q1w2e3r4t5y6!',
  DB: 'farmersapp',
  dialect: 'postgres', 
  pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
  }
  };