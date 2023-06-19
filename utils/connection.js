// conection with mysql
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// // const sequelize = new Sequelize(process.env.DATABASE_URL)
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'mysql',
//     dialectOptions: {
//       // Otras opciones específicas de MySQL si es necesario
//     }
//   });

// module.exports = sequelize;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.DATABASE_URL);

    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;