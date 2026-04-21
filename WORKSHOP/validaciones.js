document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();


        const nombre = document.getElementById('nombre').value.trim();
        if (nombre) {
            alert('Hola, ' + nombre);
        }

        const edad = parseInt(document.getElementById('edad').value, 10);
        if (!isNaN(edad)) {
            if (edad >= 18) {
                alert('Eres mayor de edad.');
            } else {
                alert('Eres menor de edad.');
            }
        }

        const nota = parseFloat(document.getElementById('nota').value);
        if (!isNaN(nota)) {
            if (nota >= 3) {
                alert('Aprobó.');
            } else {
                alert('Reprobó.');
            }
        }
    });
});
