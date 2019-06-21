'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const router = express.Router();


app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(router);

const Q = require('@nmq/q/client');

router.get('/read', (res) => {
  let payload = {
    name: 'read',
    data: `READ: event just happened!`,
  };
  Q.publish('files', 'read', JSON.stringify(payload));
  res.status(200).json(payload);
});

router.post('/create', (res) => {
  let payload = {
    name: 'create',
    data: `CREATE: event just happened!`,
  };
  Q.publish('files', 'create', JSON.stringify(payload));
  res.send('post');
});

router.put('/update', (res) => {
  let payload = {
    name: 'update',
    data: `UPDATE: event just happened!`,
  };
  Q.publish('files', 'update', JSON.stringify(payload));
  res.send('update');
});

router.delete('/delete', (res) => {
  let payload = {
    name: 'delete',
    data: `DELETE: event just happened!`,
  };
  Q.publish('files', 'delete', JSON.stringify(payload));
  res.send('delete');
});

router.use('/error', (res) => {
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
    app.listen(PORT, () => console.log(`WE HEAR ALL ON PORT ${PORT}`));
  },
};