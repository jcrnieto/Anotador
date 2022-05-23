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

  const { Pool } = require ('pg');
  //const { db } = require('./config')

/*const pool = new Pool ({
      user: db.user,
      password: db.password,
      host: db.host,
      port: db.port,
      database: db.database
  });

  module.exports = pool;*/

  const pool = new Pool ({
    user: 'postgres',
    password: '654321',
    host: 'localhost',
    port: 5432,
    database: 'formulario'
});

module.exports = pool;