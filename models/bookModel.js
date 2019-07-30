const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('reservation',{
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    date: Sequelize.DATE,
    time: Sequelize.TIME,
    id_service:  Sequelize.SMALLINT
},{
    timestamps: false
});