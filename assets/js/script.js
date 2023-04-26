$(document).ready(function() {
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

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) 
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) { return new bootstrap.Tooltip(tooltipTriggerEl) 
    });


});