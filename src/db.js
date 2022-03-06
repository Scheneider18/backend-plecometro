const { Pool, Client } = require('pg')
const {db} = require('./config')

const connectionString = db.connectionString

const pool = new Pool({
  connectionString,
})

module.exports = pool;