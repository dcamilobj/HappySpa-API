const Sequelize = require('sequelize');

const conn = new Sequelize('mJ4dCYDgei','mJ4dCYDgei','S79WwDY654',{
    host: 'remotemysql.com',
    dialect: 'mysql'
});

conn.authenticate()
.then(() => console.log('connection ok with database'))
.catch(() => console.log('connection error with database',err));

module.exports = conn;
