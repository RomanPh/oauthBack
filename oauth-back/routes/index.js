const express = require('express');
const account = require('./account');
const login = require('./login');

const routes = express.Router();
routes.use(login);
routes.use(account);

module.exports = routes;



