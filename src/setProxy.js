const { createProxyMiddleware } = require('http-proxy-middleware');

// Spring Boot와 연동 (CORS)
module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));
  app.listen(3000);
};
