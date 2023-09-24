const routes = require('express').Router();

const contactsController = require('../controllers/contacts');

console.log('in routes');
routes.get('/contacts/', contactsController.getAll);
routes.get('/contacts/:id', contactsController.getSingle);
module.exports = routes;