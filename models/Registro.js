const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Registro = db.define('registro', {
    data:{
        type: DataTypes.STRING,
        require: true
    },
    hora:{
        type: DataTypes.STRING,
        require: true
    },
    latitude:{
        type: DataTypes.STRING,
        require: true
    },
    longitude:{
        type: DataTypes.STRING,
        require: true
    },
    imagem:{
        type: DataTypes.STRING,
        require: true
    },
})


module.exports = Registro


