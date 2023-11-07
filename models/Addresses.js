const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = require('./User')

const Addresses = db.define('Addresses',{

    street:{
        type: DataTypes.STRING,
        require: true
    },
    number: {
        type: DataTypes.STRING,
        require: true,
    },
    city: {
        type: DataTypes.STRING,
        require: true
    },

})

User.hasMany(Addresses)

Addresses.belongsTo(User)

module.exports = Addresses;