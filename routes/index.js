const route = require('express').Router();
const path = require('path');
route.get("*", (req, res) => {
  console.log("baaal");
  if (req.url.indexOf('/dashboard') > -1) {
    res.redirect('/');
  } else {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  }
  
});
route.use('/folder',require('./api/Folder'));

module.exports = route;
