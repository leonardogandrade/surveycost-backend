const express = require('express');
const routes = express.Router();
const SurveyController = require('../src/controller/SurveyController');

routes.post('/vote',SurveyController.voteAgree);
routes.get('/vote',SurveyController.listAll);
routes.post('/create',SurveyController.create);

module.exports = routes;