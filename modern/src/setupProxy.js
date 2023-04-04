/* eslint-disable import/no-extraneous-dependencies */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(createProxyMiddleware('/api/socket', { target: `wss://${process.env.REACT_APP_URL_NAME}`, ws: true, changeOrigin: true }));
  app.use(createProxyMiddleware('/api', { target: `https://${process.env.REACT_APP_URL_NAME}`, changeOrigin: true }));
};
