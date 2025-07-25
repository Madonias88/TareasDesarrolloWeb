document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenido a mi sitio web!');
    
    const boton = document.getElementById('cambiarTema');
    const icono = document.getElementById('iconoTema');
    const body = document.body;

    boton.addEventListener('click', () => {
        body.classList.toggle('tema-oscuro');
        body.classList.toggle('tema-claro');
        if (body.classList.contains('tema-oscuro')) {
            icono.textContent = '☀️'; // Sol para modo oscuro
        } else {
            icono.textContent = '🌙'; // Luna para modo claro
        }
    });

    // Inicializa el icono según el tema
    window.addEventListener('DOMContentLoaded', () => {
        if (body.classList.contains('tema-oscuro')) {
            icono.textContent = '☀️';
        } else {
            icono.textContent = '🌙';
        }
    });
});