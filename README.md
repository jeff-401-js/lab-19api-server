# lab-19api-server
api-server for lab-19

### Author: Student/Group Name
Jeff

### Links and Resources
* [submission PR](https://github.com/jeff-401-js/lab-19api-server/pull/1)
* [travis](https://www.travis-ci.com/jeff-401-js/lab-19api-server)
* [Heroku](https://murmuring-tor-32629.herokuapp.com/)

#### Documentation
* [UML-Data-Flow](https://photos.app.goo.gl/DjoR95g4THdKPHBE9)
* [JSDOCS](https://murmuring-tor-32629.herokuapp.com/docs)
* [Swagger](https://murmuring-tor-32629.herokuapp.com/api-docs)

## Modules
server.js
index.js

### Setup
eslint
jest
nmq

#### `.env` requirements
PORT=3001
Q_SERVER=http://localhost:3000

#### Running the app
* `npm start`


* Endpoint: `/read`
  * allows publishing of status 200 and json payload with event name and data string
* Endpoint: `/create`
  * allows publishing of status 200 and json payload with event name and data string
* Endpoint: `/update`
  * allows publishing of status 200 and json payload with event name and data string
* Endpoint: `/delete`
  * allows publishing of status 200 and json payload with event name and data string
* Endpoint ` `
  * catchall error endpoint allows publishing of status 200 and json payload with event name and data string

#### Tests
* How do you run tests?
* `npm test`
