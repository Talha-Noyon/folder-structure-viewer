const route = require('express').Router();

route.use('/folder',require('./api/Folder'));

module.exports = route;