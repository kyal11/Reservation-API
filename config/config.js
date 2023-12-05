const dotenv = require("dotenv");
dotenv.config();

const db = {
    "development": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME ,
        "host": process.env.DATABASE_HOST,
        "dialect": "mysql"
      },
      "test": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME ,
        "host": process.env.DATABASE_HOST,
        "dialect": "mysql"
    
      },
      "production": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
      }
}

module.exports = db;