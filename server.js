'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const Q = require('@nmq/q/client');

app.get('/read', (res) => {
  let payload = {
    name: 'read',
    data: `READ: event just happened!`,
  };
  Q.publish('files', 'read', JSON.stringify(payload));
  res.send('get');
});

app.post('/create', (res) => {
  let payload = {
    name: 'create',
    data: `CREATE: event just happened!`,
  };
  Q.publish('files', 'read', JSON.stringify(payload));
  res.send('post');
});

app.put('/update', (res) => {
  let payload = {
    name: 'update',
    data: `UPDATE: event just happened!`,
  };
  Q.publish('files', 'read', JSON.stringify(payload));
  res.send('update');
});


module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`WE HERE ALL ON PORT ${PORT}`));
  },
};