<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root"; // Tu usuario de MySQL
$password = ""; // Tu contraseña de MySQL
$dbname = "tienda_online"; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar el formulario de registro
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['fullname']; // Nombre completo
    $email = $_POST['email']; // Correo electrónico
    $telefono = $_POST['phone']; // Teléfono
    $contrasena = $_POST['password']; // Contraseña
    $confirmar_contrasena = $_POST['confirm-password']; // Confirmar contraseña
    $direccion = $_POST['address']; // Dirección
    $rol = 'cliente'; // Asumimos que todos los registros son 'cliente' por defecto

    // Verificar que las contraseñas coincidan
    if ($contrasena != $confirmar_contrasena) {
        echo "Las contraseñas no coinciden.";
        exit;
    }

    // Encriptar la contraseña
    $contrasena_encriptada = password_hash($contrasena, PASSWORD_DEFAULT);

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO usuarios (nombre, email, telefono, contrasena, rol, direccion) 
            VALUES ('$nombre', '$email', '$telefono', '$contrasena_encriptada', '$rol', '$direccion')";

    // Verificar si la inserción fue exitosa
    if ($conn->query($sql) === TRUE) {
        echo "Cuenta creada exitosamente";
        // Redirigir al inicio de sesión o a otra página
        header("Location: login.html");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close(); // Cerrar la conexión
?>

