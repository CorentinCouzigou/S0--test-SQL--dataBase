const { Client } = require('pg');
const client = new Client();
client.connect();


sudo -i -u postgres

module.exports = client;