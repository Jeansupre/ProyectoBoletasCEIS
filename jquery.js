$.when($.ready).then(function() {
    $('#formulario').on('submit', function(event) {
      event.preventDefault(); // prevenir comportamiento por defecto del submit
      let datos = $(this).serialize(); // serializar datos del formulario
      console.log(datos)
      console.log(response)
      $.ajax({
        type: 'POST',
        url: './inserts.js', // obtener URL del formulario
        data: datos,
        success: function(response) {
          console.log(response); // respuesta del servidor
        }
      });
    });
  });
  
