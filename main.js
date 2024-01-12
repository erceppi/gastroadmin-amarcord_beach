// Función para agregar un producto a la orden
function agregarProducto() {
  // Obtener los valores del formulario
  const producto = document.getElementById("selectProducto").value;
  const mesa = document.getElementById("inputMesa").value;
  const personas = document.getElementById("inputPersonas").value;
  const cantidad = document.getElementById("inputCantidad").value;

  // Validar que los campos no estén vacíos
  if (producto && mesa && personas && cantidad) {
    // Calcular el subtotal (por ahora, asumimos un precio fijo por producto)
    const precioPorProducto = 10.0; // Precio ficticio por producto
    const subtotal = cantidad * precioPorProducto;

    // Crear una nueva fila en la tabla
    const tabla = document
      .getElementById("tablaOrdenes")
      .getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow(tabla.rows.length);

    // Llenar la fila con los datos
    const celdas = [
      producto,
      mesa,
      personas,
      cantidad,
      subtotal.toFixed(2), // Formatear a dos decimales
      '<button onclick="eliminarFila(this)">Eliminar</button>',
    ];

    for (let i = 0; i < celdas.length; i++) {
      const nuevaCelda = nuevaFila.insertCell(i);
      nuevaCelda.innerHTML = celdas[i];
    }

    // Actualizar el monto total
    actualizarMontoTotal(subtotal);
  } else {
    alert("Por favor, complete todos los campos del formulario.");
  }
}

// Función para eliminar una fila de la tabla
function eliminarFila(botonEliminar) {
  const fila = botonEliminar.parentNode.parentNode;
  const subtotal = parseFloat(fila.cells[4].innerHTML);

  // Eliminar la fila de la tabla
  fila.parentNode.removeChild(fila);

  // Actualizar el monto total restando el subtotal eliminado
  actualizarMontoTotal(-subtotal);
}

// Función para actualizar el monto total
function actualizarMontoTotal(subtotal) {
  const montoTotalElemento = document.getElementById("montoTotal");
  let montoTotal = parseFloat(montoTotalElemento.innerHTML);

  // Sumar o restar el subtotal al monto total actual
  montoTotal += subtotal;

  // Actualizar el elemento en la interfaz
  montoTotalElemento.innerHTML = montoTotal.toFixed(2); // Formatear a dos decimales
}
