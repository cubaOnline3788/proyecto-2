// Manejo del menú de navegación
$(document).ready(function() {
    // Agrega la clase 'active' al elemento del menú actual
    $('nav a').each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
        }
    });

    // Manejo del botón de búsqueda
    $('.search-bar input').on('keyup', function() {
        // Realiza una búsqueda dinámica en la base de datos
        // utilizando la API de búsqueda de tu servidor web
        // (Ejemplo: AJAX o Fetch API)
        // ...
    });
});

// Función para mostrar el menú de navegación en dispositivos móviles
function toggleNav() {
    $('.navbar-collapse').toggleClass('show');
}
