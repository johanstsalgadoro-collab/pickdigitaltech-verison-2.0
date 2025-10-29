// Validación del formulario al enviar
document.getElementById("register-form").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value; // Obtener el valor del correo electrónico
    let password = document.getElementById("password").value; // Obtener el valor de la contraseña
    let confirmPassword = document.getElementById("confirm-password").value; // Obtener el valor de la confirmación de la contraseña
    let phone = document.getElementById("phone").value; // Obtener el valor del teléfono
    
    // Expresiones regulares para validar
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co)$/; // Expresión regular para validar el formato del correo
    let phonePattern = /^\d+$/; // Expresión regular para validar que el teléfono contenga solo números
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Expresión regular para validar la seguridad de la contraseña

    // Validación de correo electrónico
    if (!email.match(emailPattern)) { // Verificar si el correo coincide con el patrón
        alert("Por favor ingresa un correo electrónico válido."); // Alerta si el correo no es válido
        event.preventDefault(); // Previene el envío del formulario
        return; // Sale de la función si el correo no es válido
    }

    // Validación del número de teléfono (solo números)
    if (phone && !phone.match(phonePattern)) { // Si el teléfono es proporcionado y no contiene solo números
        alert("El número de teléfono debe contener solo números."); // Alerta si el número no es válido
        event.preventDefault(); // Previene el envío del formulario
        return; // Sale de la función si el número no es válido
    }

    // Validación de la contraseña
    if (password !== confirmPassword) { // Verificar si la contraseña no coincide con la confirmación
        alert("Las contraseñas no coinciden."); // Alerta si las contraseñas no coinciden
        event.preventDefault(); // Previene el envío del formulario
        return; // Sale de la función si las contraseñas no coinciden
    }

    // Validación de la contraseña segura
    if (!password.match(passwordPattern)) { // Verificar si la contraseña cumple con los requisitos de seguridad
        alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial (@, $, !, %, etc.)"); // Alerta si la contraseña no es segura
        event.preventDefault(); // Previene el envío del formulario
        return; // Sale de la función si la contraseña no es segura
    }
});

// Mostrar/ocultar contraseñas
document.getElementById("toggle-password").addEventListener("click", function() {
    let passwordField = document.getElementById("password"); // Obtener el campo de la contraseña
    let confirmPasswordField = document.getElementById("confirm-password"); // Obtener el campo de la confirmación de la contraseña
    
    // Alternar entre 'password' y 'text' para mostrar u ocultar la contraseña
    let type = passwordField.type === "password" ? "text" : "password"; 
    passwordField.type = type; // Cambiar el tipo de la contraseña
    confirmPasswordField.type = type; // Cambiar el tipo de la confirmación de la contraseña
});

// Evento hover en las tarjetas de productos
let productCards = document.querySelectorAll('.product-card'); // Obtener todas las tarjetas de productos
productCards.forEach(function(card) { // Iterar sobre cada tarjeta
    card.addEventListener("mouseover", function() { // Evento al pasar el ratón sobre la tarjeta
        card.style.transform = "scale(1.05)"; // Agrandar la tarjeta ligeramente
        card.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)"; // Añadir sombra a la tarjeta
    });
    card.addEventListener("mouseout", function() { // Evento cuando el ratón sale de la tarjeta
        card.style.transform = "scale(1)"; // Restaurar el tamaño original de la tarjeta
        card.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)"; // Restaurar la sombra original de la tarjeta
    });
});

// Validación en tiempo real (se aplica conforme el usuario llena los campos)
document.getElementById("email").addEventListener("input", function(event) {
    let email = event.target.value; // Obtener el valor del correo del evento
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co)$/; // Expresión regular para el correo
    let emailInput = document.getElementById("email"); // Obtener el campo de correo
    
    // Verificar si el correo es válido
    if (!email.match(emailPattern)) { // Si el correo no coincide con el patrón
        emailInput.setCustomValidity("El correo debe tener formato válido y finalizar en .com o .co"); // Establecer el mensaje de error personalizado
    } else {
        emailInput.setCustomValidity(""); // Si el correo es válido, eliminar cualquier mensaje de error
    }
});

// Validación del número de teléfono en tiempo real
document.getElementById("phone").addEventListener("input", function(event) {
    let phone = event.target.value; // Obtener el valor del teléfono del evento
    let phonePattern = /^\d+$/; // Expresión regular para validar solo números en el teléfono
    let phoneInput = document.getElementById("phone"); // Obtener el campo de teléfono
    
    // Verificar si el número de teléfono tiene solo números
    if (phone && !phone.match(phonePattern)) { // Si el teléfono tiene caracteres no numéricos
        phoneInput.setCustomValidity("El número de teléfono debe contener solo números."); // Establecer el mensaje de error
    } else {
        phoneInput.setCustomValidity(""); // Si el teléfono es válido, eliminar cualquier mensaje de error
    }
});

