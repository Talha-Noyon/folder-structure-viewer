const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Folder');
// creates root folder
require('./models/Init');

['connecting', 'connected', 'open', 'disconnecting', 'disconnected', 'close', 'reconnected', 'error', 'fullsetup', 'timeout'].forEach(name => {
    mongoose.connection.on(name, err => {
      console.log(new Date().toISOString(), `Mongoose event: ${name} ${err || ''}`);
    }, {useUnifiedTopology: true});
  });
mongoose.connect("mongodb+srv://HeadlessTechnologies:HeadlessTechnologies@headlesstechnologies.sqtqb.mongodb.net/HeadlessTechnologies",{ useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, './client/build')));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.get("/dashboard", (req, res) => {
  if (req.url.indexOf('/dashboard') > -1) {
    res.redirect('/');
  } else {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }
});
app.use('/api',require('./routes'));
const PORT = process.env.PORT || 80;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})
