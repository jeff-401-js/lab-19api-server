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
  Q.publish('files', 'create', JSON.stringify(payload));
  res.send('post');
});

app.put('/update', (res) => {
  let payload = {
    name: 'update',
    data: `UPDATE: event just happened!`,
  };
  Q.publish('files', 'update', JSON.stringify(payload));
  res.send('update');
});

app.delete('/delete', (res) => {
  let payload = {
    name: 'delete',
    data: `DELETE: event just happened!`,
  };
  Q.publish('files', 'delete', JSON.stringify(payload));
  res.send('delete');
});

app.use('/error', (res) => {
  let payload = {
    name: 'error',
    data: `ERROR: event just happened!`,
  };
  Q.publish('files', 'error', JSON.stringify(payload));
  res.send('error');
});


module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`WE HERE ALL ON PORT ${PORT}`));
  },
};