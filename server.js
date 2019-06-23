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
 * @returns {Object} 200 - returns json object with event name and data string
 */

app.get('/read', (req, res) => {
  let payload = {
    name: 'read',
    data: `READ: event just happened!`,
  };
  Q.publish('database', 'read', JSON.stringify(payload));
  res.status(200).json(payload);
});

/**
 * post route create
 * @route POST /{create}
 * @consumes nothing
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {Object} 200 - returns json object with event name and data string
 */

app.post('/create', (req, res) => {
  let payload = {
    name: 'create',
    data: `CREATE: event just happened!`,
  };
  Q.publish('database', 'create', JSON.stringify(payload));
  res.status(200).json(payload);
});

/**
 * put route update
 * @route PUT /{update}
 * @consumes nothing
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {Object} 200 - returns json object with event name and data string
 */

app.put('/update', (req, res) => {
  let payload = {
    name: 'update',
    data: `UPDATE: event just happened!`,
  };
  Q.publish('database', 'update', JSON.stringify(payload));
  res.status(200).json(payload);
});

/**
 * delete route delete
 * @route DELETE /{delete}
 * @consumes nothing
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {Object} 200 - returns json object with event name and data string
 */

app.delete('/delete', (req, res) => {
  let payload = {
    name: 'delete',
    data: `DELETE: event just happened!`,
  };
  Q.publish('database', 'delete', JSON.stringify(payload));
  res.status(200).json(payload);
});

/**
 * use route catchall
 * @route USE /{}
 * @consumes nothing
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {Object} 200 - returns json object with event name and data string
 */

app.use((req, res) => {
  let payload = {
    name: 'error',
    data: `ERROR: event just happened!`,
  };
  Q.publish('database', 'error', JSON.stringify(payload));
  res.status(200).json(payload);
});

/**
 * Export object with authrouter
 * @type {Object}
 */

module.exports = {
  server: app,
  start: () => {
    let PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`WE HEAR ALL ON PORT ${PORT}`));
  },
};