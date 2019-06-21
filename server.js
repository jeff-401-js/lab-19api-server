'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());




module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`WE HERE ALL ON PORT ${PORT}`));
  },
};