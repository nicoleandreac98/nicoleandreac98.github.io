$(document).ready(function(){
    // Selecciona todos los enlaces que apuntan a un id en la misma página
  $('a[href*="#"]').click(function(event) {
      // Evita el comportamiento por defecto de los enlaces
      event.preventDefault();

      // Obtiene el id del elemento al que el enlace apunta
      var target = $(this).attr("href");

      // Usa animate() para hacer el smooth scroll
      $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 3000); // El número indica la duración de la animación en milisegundos
  });

  document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío automático del formulario
    if (confirm("¿Estás seguro de que deseas enviar el formulario?")) {
      // Aquí va el código que se ejecutará si el usuario hace clic en "Aceptar"
      window.location.href = "https://nicoleandreac98.github.io/#inicio"; // Redirige al usuario a otra página
    } else {
      // Aquí va el código que se ejecutará si el usuario hace clic en "Cancelar"
    }
  });
});