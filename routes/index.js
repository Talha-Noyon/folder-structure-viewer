const route = require('express').Router();
const path = require('path');

route.use('/folder',require('./api/Folder'));

module.exports = route;
