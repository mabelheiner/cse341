const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.mabelRoute);
routes.get('/jason', lesson1Controller.jasonRoute);
routes.get('/margo', lesson1Controller.margoRoute);

module.exports = routes;