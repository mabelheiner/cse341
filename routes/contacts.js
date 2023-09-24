const routes = require('express').Router();

const contactsController = require('../controllers/contacts');

routes.get('/contacts/', contactsController.getAll);
routes.get('/contacts/:id', contactsController.getSingle);
module.exports = routes;