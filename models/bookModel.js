const Sequelize = require('sequelize');
const moment = require('moment');
const conn = require('../database/connection');

module.exports = conn.define('reservations',{
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    date: Sequelize.DATE,
    time: Sequelize.DATE,
    id_service:  Sequelize.SMALLINT
},{
    timestamps: false
});