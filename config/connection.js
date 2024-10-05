// config/connection.js
const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables

let sequelize;

if (process.env.DATABASE_URL) {
  // For deployment, such as on Heroku with a PostgreSQL add-on
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  // For local development using environment variables from .env
  sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      host: 'localhost', // You can adjust this based on your setup
      dialect: 'postgres',
      port: 5432 // Default PostgreSQL port
    }
  );
}

module.exports = sequelize;
