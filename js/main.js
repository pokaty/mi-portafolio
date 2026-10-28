// Muestra el año actual en el pie de página
document.getElementById('anio').textContent = new Date().getFullYear();


const formulario = document.getElementById("formulario-contacto");
const respuesta = document.getElementById("respuesta-formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!formulario.checkValidity()) {
    formulario.reportValidity();
    return;
  }

  respuesta.textContent =
    "Formulario validado correctamente. Para enviar el mensaje, debes conectar un servicio de correo.";

  formulario.reset();
});
