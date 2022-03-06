const { config } = require('dotenv')
config()

module.exports = {
    db:{
        connectionString: process.env.CONNECT
    }
}