'use strict';

/**
 * API Server Module
 * @module server
 */

require('dotenv').config();

const express = require('express');
const app = express();


app.use(express.json());

const options = require('../docs/config/swagger');
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(options);

app.use(express.static('docs'));
app.use('/docs', express.static('docs'));


const Q = require('@nmq/q/client');

/**
 * get route read
 * @route GET /{read}
 * @consumes nothing
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {Object} 200 - returns json object with name and data
 */

app.get('/read', (req, res) => {
  let payload = {
    name: 'read',
    data: `READ: event just happened!`,
  };
  Q.publish('database', 'read', JSON.stringify(payload));
  res.status(200).json(payload);
});

app.post('/create', (req, res) => {
  let payload = {
    name: 'create',
    data: `CREATE: event just happened!`,
  };
  Q.publish('database', 'create', JSON.stringify(payload));
  res.status(200).json(payload);
});

app.put('/update', (req, res) => {
  let payload = {
    name: 'update',
    data: `UPDATE: event just happened!`,
  };
  Q.publish('database', 'update', JSON.stringify(payload));
  res.status(200).json(payload);
});

app.delete('/delete', (req, res) => {
  let payload = {
    name: 'delete',
    data: `DELETE: event just happened!`,
  };
  Q.publish('database', 'delete', JSON.stringify(payload));
  res.status(200).json(payload);
});

app.use((req, res) => {
  let payload = {
    name: 'error',
    data: `ERROR: event just happened!`,
  };
  Q.publish('database', 'error', JSON.stringify(payload));
  res.status(200).json(payload);
});


module.exports = {
  server: app,
  start: () => {
    let PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`WE HEAR ALL ON PORT ${PORT}`));
  },
};