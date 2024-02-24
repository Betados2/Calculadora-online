document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    var pantalla = document.querySelector('.resultado');
    var botonesNumeros = document.querySelectorAll('.numeros');
    var botonesOperadores = document.querySelectorAll('.operadores');
    var botonIgual = document.querySelector('.igual');
    var botonCE = document.querySelector('.eliminar_todo');

    // Función para manejar los clics en los botones de números
    botonesNumeros.forEach(function (boton) {
        boton.addEventListener('click', function () {
            if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
                pantalla.textContent = boton.textContent;
            } else {
                pantalla.textContent += boton.textContent;
            }
        });
    });

    // Función para manejar los clics en los botones de operadores
    botonesOperadores.forEach(function (boton) {
        boton.addEventListener('click', function () {
            if (pantalla.textContent !== 'Error') {
                pantalla.textContent += boton.textContent;
            }
        });
    });

    // Función para manejar el clic en el botón CE (borrar todo)
    botonCE.addEventListener('click', function () {
        pantalla.textContent = '0';
    });

    // Función para manejar el clic en el botón igual
    botonIgual.addEventListener('click', function () {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch (error) {
            pantalla.textContent = 'Error';
        }
    });
});
