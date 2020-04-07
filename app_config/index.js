switch (process.env.NODE_ENV) { 
  case 'production':
    module.exports = require('./production');
    break;
  case 'development':
    module.exports = require('./development');
    break;
}