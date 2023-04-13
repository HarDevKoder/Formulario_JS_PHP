// Función para validar el formato de email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Función para mostrar el formulario de ingreso de email
function showEmailInputForm() {
  return swal.fire({
    title: "Ingresa Email del Referente",
    icon: 'warning',
    input: "text",
    inputAttributes: {
      class:'swal2-input' // agrega la clase personalizada al input
    },
    showCancelButton: true,
    confirmButtonText: "Verificar",
    width: "400px",
    showCloseButton: true,
    showCancelButton: false,
    customClass: {
      title: 'my-title-class',
      confirmButton: 'swal2-confirm',
      cancelButton: 'swal2-cancel',
      icon: 'swal2-icon--question'
    },
  });
}

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
  return swal.fire({
    title: "Procediendo a verificar Referente!",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      title: 'my-title-class',
      confirmButton: 'swal2-confirm',
      cancelButton: 'swal2-cancel'
    },
  });
}

// Función para mostrar mensaje de error
function showErrorMessage(title, text) {
  return swal.fire({
    title: title,
    text: text,
    icon: "error",
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      title: 'my-title-class',
      confirmButton: 'swal2-confirm',
      cancelButton: 'swal2-cancel',
      htmlContainer: 'swal2-html-container'
    },
  });
}

// Función principal que llama a las otras funciones y ejecuta el código
function verifyEmail() {
  showEmailInputForm().then(function(result) {
    if (result.isConfirmed) {
      var userEmail = result.value;
      if (userEmail == null || userEmail.trim() === '') { // se verifica si el correo es nulo o una cadena vacía
        showErrorMessage("Error", "No se ingresó ningún correo");
        setTimeout(() => {
          verifyEmail(); // se llama a la función showEmailInputForm() de nuevo
        }, 2000);
      } else if (!validateEmail(userEmail)) { // se verifica si el correo tiene un formato válido
        showErrorMessage("Error", "El correo ingresado no es válido");
        setTimeout(() => {
          verifyEmail(); // se llama a la función showEmailInputForm() de nuevo
        }, 2000);
      } else {
        showSuccessMessage();
        setTimeout(() => {
          window.location.href = "datos.php?userEmail=" + encodeURIComponent(userEmail);
        }, 2000);
      }
    } else {
      showErrorMessage("Verificación cancelada", "");
    }
  });
}
