document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-hamburguesa');
    const mainNav = document.querySelector('.main-nav');
    const menuLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('menu-activo');
        });

        // Cerrar el menú al hacer clic en un enlace
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('menu-activo');
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.formulario-contacto');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Detener el envío del formulario

            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');

            let isValid = true;

            // Limpiar errores anteriores
            document.querySelectorAll('.error-message').forEach(el => el.remove());

            // Validar nombre
            if (nombre.value.trim() === '') {
                showError(nombre, 'El nombre es obligatorio.');
                isValid = false;
            }

            // Validar email
            if (email.value.trim() === '') {
                showError(email, 'El correo electrónico es obligatorio.');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Por favor, introduce un correo electrónico válido.');
                isValid = false;
            }

            // Validar mensaje
            if (mensaje.value.trim() === '') {
                showError(mensaje, 'El mensaje es obligatorio.');
                isValid = false;
            }

            if (isValid) {
                // Si todo es válido, puedes enviar el formulario.
                // En un entorno real, esto enviaría los datos al servidor.
                alert('¡Formulario enviado con éxito!');
                contactForm.submit(); // Vuelve a enviar el formulario
            }
        });

        function showError(input, message) {
            const formControl = input.parentElement;
            const errorMessage = document.createElement('small');
            errorMessage.className = 'error-message';
            errorMessage.innerText = message;
            formControl.appendChild(errorMessage);
        }

        function isValidEmail(email) {
            // Expresión regular simple para validar email
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
});