// Mensaje de bienvenida
window.onload = function() {
    alert("¡Bienvenido a Guatemala Turismo! Explora nuestros sitios turísticos.");
};

// Función para cambiar el color de fondo (opcional)
function cambiarFondo() {
    const colores = ['#f5f5f5', '#e3f2fd', '#e8f5e9', '#fff3e0'];
    const colorActual = document.body.style.backgroundColor;
    let nuevoColor;
    
    do {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    } while (nuevoColor === colorActual);
    
    document.body.style.backgroundColor = nuevoColor;
}