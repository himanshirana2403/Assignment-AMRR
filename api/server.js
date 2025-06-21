const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Read the db.json file into an object
const dbPath = path.join(__dirname, '..', 'db.json');
const dbObject = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
const router = jsonServer.router(dbObject);

server.use(middlewares);
server.use(router);

module.exports = server; 