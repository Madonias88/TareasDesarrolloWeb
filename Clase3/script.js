// Función para cambiar el color de fondo
document.getElementById('cambiar-color').addEventListener('click', function() {
const colores = ['#f5f5f5', '#e3f2fd', '#fff8e1', '#f3e5f5', '#2b392cff'];
const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
document.body.style.backgroundColor = colorAleatorio;
});

// Función para mostrar alerta
document.getElementById('mostrar-alerta').addEventListener('click', function() {
    const nombre = "Mario Adonias Galvez Yoc"; // Reemplaza con tu nombre
    const carrera = "Licenciatura en Administración de Sistemas Informáticos";
    alert(`Hola, soy ${nombre} y estudio ${carrera}. ¡Gracias por visitar mi perfil!`);
});

// Validación del formulario (opcional)
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    if (nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor, complete todos los campos del formulario.');
    } else {
        alert('Formulario enviado con éxito. ¡Gracias por tu mensaje!');
        this.reset();
    }
});