const mongoose = require('mongoose');
const express = require('express');

const DB_URI = 'mongodb://localhost:27017/Boletas_CEIS';

//CONEXION
Conexion = mongoose.connect(DB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true})
    .then(() => {
            console.log('******** CONEXIÓN CORRECTA ********');
    })
    .catch((err) => {
            console.log('******** ERROR DE CONEXIÓN ********');
            console.log(err)
    })

//ESQUEMA

const MemeFestCEISSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            require: true
        },
        apellido:{
            type: String,
            require: true
        },
        cedula:{
            type: Number,
            unique: true,
            require: true
        },
        email:{
            type: String,
            unique: true,
            require: true
        }
    },
    {
        // crea dos campos, uno con la fecha de creación y el otro con la fecha de actualización
        timestamps: true,
        // desactiva el versionamiento de los datos (__v)
        versionKey: false
    }
)

//MODELO

const Boletas = new mongoose.model('boletas', MemeFestCEISSchema)

// INSERTAR DATOS

// Boletas.create(
//     {
//         name: 'Jean',
//         apellido: 'Rodriguez',
//         cedula: '1005322413',
//         email: 'j.carlo0123@gmail.com'
//     }
// )

//Configuración del servidor express

module.exports = {Boletas};