const {Boletas} = require('./app');

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

Boletas.create(
    {
        nombre: 'Jean',
        apellido: 'Rodriguez',
        cedula: 1005322413,
        email: 'j.carlo0123@gmail.com'
    }
)