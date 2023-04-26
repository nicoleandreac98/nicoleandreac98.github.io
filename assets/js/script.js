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


    const quienes = document.querySelector('#quienes');

    function hidePresentation() {
        if (window.innerWidth < 768) {
        quienes.style.display = 'none';
        } else {
        quienes.style.display = 'block';
        }
    }

    window.addEventListener('resize', hidePresentation);




});