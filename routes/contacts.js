const routes = require('express').Router();

const contactsController = require('../controllers/contacts');

routes.get('/contacts/', contactsController.getAll);
routes.get('/contacts/:id', contactsController.getSingle);
routes.post('/', contactsController.createContact);
routes.put('/:id', contactsController.updateContact);
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;