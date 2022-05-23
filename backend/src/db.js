/*const { Sequelize } = require('sequelize');
const {
    DB_USER, DB_PASSWORD, DB_HOST
  } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/formulario`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const { Form } = sequelize.models;

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };*/
 

 // const { Pool } = require ('pg');
  //const { db } = require('./config')

/*const pool = new Pool ({
      user: db.user,
      password: db.password,
      host: db.host,
      port: db.port,
      database: db.database
  });

  module.exports = pool;*/

 /* const pool = new Pool ({
    user: 'postgres',
    password: '654321',
    host: 'localhost',
    port: 5432,
    database: 'formulario'
});*/

//module.exports = pool;

require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
/*djsdhgf*/

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/formulario`,
        { logging: false, native: false }
      );

      module.exports = {
        ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
        conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
      };