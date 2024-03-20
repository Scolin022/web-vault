const express = require('express');
const viewRouter = express.Router();

viewRouter.get('/', (req, res) => {res.render('pages/index');});

module.exports = viewRouter;