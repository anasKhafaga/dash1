const { errorHandler, processErrorHandler } = require('./errorHandlers');

module.exports = {
  middlewares: require('./middlewares'),
  routes: require('./routes'),
  viewEngine: require('./viewEngine'),
  errorHandler,
  processErrorHandler
};