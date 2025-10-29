<?php
$servername = "localhost";
$username = "root"; // Tu usuario de MySQL
$password = ""; // Tu contraseña de MySQL
$dbname = "tienda_online"; // Nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
?>
<?php
if(isset($_POST['add_to_cart'])) {
  $id_producto = $_POST['id_producto']; // Obtén el id del producto desde el botón
  $cantidad = 1; // La cantidad puede ser ajustada según la lógica del carrito

  // Inserta el producto en la tabla carrito_detalle
  $sql = "INSERT INTO carrito_detalle (id_carrito, id_producto, cantidad, subtotal) 
          VALUES (1, $id_producto, $cantidad, (SELECT precio FROM productos WHERE id_producto = $id_producto))"; // Aquí '1' es el id del carrito de un usuario

  if ($conn->query($sql) === TRUE) {
    echo "Producto agregado al carrito";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}
?>
