swal.fire({
  title: "Ingresa Email del referente",
  input: "text",
  showCancelButton: true,
  inputPlaceholder: "Escribe aquí...",
  confirmButtonText: "Verificar",
}).then(function(result) {
  if (result.isConfirmed) {
    if (result.isConfirmed) {
      // Almacena el valor de la caja de texto en una variable
      var textoGuardado = result.value;
      // Muestra un SweetAlert de éxito
      swal.fire({
        title: "Referente Verificado!",
        text: "Procediendo a Mostrar estado de Ventas: ",
        icon: "success",
        showConfirmButton: false,
        timer: 5000
      });
      const userEmail = textoGuardado;
      setTimeout(() => {
        window.location.href = "datos.php?userEmail=" + encodeURIComponent(userEmail);
      }, 6000);
    } else {
      // Muestra un SweetAlert de error si no se ingresó ningún texto
      swal.fire({
        title: "Error!",
        text: "No ingresaste información",
        icon: "error",
        timer: 3000,
        showConfirmButton: false
      }).then(() => {
        // Vuelve a mostrar el formulario después de cerrar el mensaje de error
        swal.fire({
          title: "Ingresa Email del referente",
          input: "text",
          showCancelButton: true,
          confirmButtonText: "Verificar",
        }).then(function(result) {
          // Repite la validación
          // ...
        });
      });
    }
  } else {
    // Muestra un SweetAlert de cancelación
    swal.fire("Cancelado", "No se ingresó ningún texto", "error");
  }
});
