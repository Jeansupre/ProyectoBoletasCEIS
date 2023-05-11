const {Boletas} = require('./app');
const express = require('express');

let res = express.response

// const form = document.getElementById("formulario")

// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   let formulario = new FormData(form)

//   Boletas.create(
//         {
//             nombre: formulario.get("nombre"),
//             apellido: formulario.get("apellido"),
//             cedula: formulario.get("cedula"),
//             email: formulario.get("email")
//         }
//     )
//   }
// )

class Controlador{
    static insertarDatos(body, res){
        Boletas.create(
            {
                nombre: 'Jean',
                apellido: 'Rodriguez',
                cedula: 1005322413,
                email: 'j.carlo0123@gmail.com'
            }
        )
    }
}

module.exports = Controlador.insertarDatos;