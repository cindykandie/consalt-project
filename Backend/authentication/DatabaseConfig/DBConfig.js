const mssql = require('mssql')
const env = require('dotenv')
env.config()

const config = {
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    server: 'localhost',
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 3000
    }

}