const {home, users} = require('../routes/index');

module.exports = (app) => {
  app.use('/', home);
  app.use('/users', users);
 };