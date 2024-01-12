# Amarcord Beach - Sistema de Caja

## Descripción General del Proyecto

Amarcord Beach es un sistema de caja diseñado para gestionar las órdenes en un pequeño comercio gastronómico. La aplicación web permite a los usuarios tomar órdenes de mesas, agregar productos, actualizar la orden y generar estadísticas de ventas. Además, ofrece la capacidad de imprimir recibos en formato PDF para su envío por correo electrónico o almacenamiento local.

## Páginas del Proyecto

### 1. **Inicio (index.html)**

Esta página sirve como la interfaz principal del sistema. Contiene dos secciones clave:

- **Orden Actual:** Muestra la información detallada de la orden activa, incluyendo número de mesa, cantidad de personas, productos seleccionados y total.

- **Editar Orden:** Permite al usuario agregar productos a la orden activa. Incluye campos para número de mesa, cantidad de personas y una selección de productos.

### 2. **Órdenes (ordenes.html)**

En esta página, se visualizan todas las órdenes, tanto activas como concluidas. Proporciona un menú dinámico lateral para alternar entre ambas categorías. Al seleccionar una orden, se muestra la información completa de la misma.

### 3. **Reportes (reportes.html)**

Aún por desarrollar, esta página contendrá estadísticas y reportes sobre las ventas generales y por productos.

### 4. **Menú (menu.html)**

En la sección de menú, los usuarios pueden editar y agregar nuevos productos. Se organiza por categorías y subcategorías, permitiendo la inclusión de nuevos elementos de manera intuitiva.

## Aspectos Técnicos

### Frontend (HTML, CSS, JavaScript)

- **HTML:** Se utiliza para la estructura semántica de las páginas, garantizando accesibilidad y mantenimiento.

- **CSS:** Ofrece estilos consistentes y adaptativos, siguiendo las mejores prácticas de UI/UX. Se ha priorizado la compatibilidad con diversas pantallas y navegadores.

- **JavaScript:** Controla la lógica de la aplicación, gestionando la interactividad del usuario, la manipulación del DOM y las solicitudes al backend.

### Backend (Por implementar)

- **Tecnologías:** Node.js, Express (u otro framework), y MongoDB (o un sistema de gestión de base de datos relacional).

- **Funcionalidades Backend:**
  - Gestión de órdenes, productos y estadísticas.
  - Exportación de datos a formatos como Excel y CSV.

### Documentación y Mantenimiento

El código sigue buenas prácticas de codificación, utilizando semántica HTML, comentarios claros en el código y una estructura modular. Además, se proporciona documentación detallada para facilitar futuras actualizaciones y correcciones.

El desarrollo y la colaboración se realizan en el entorno de VSCode en Windows 11.

**Nota:** El proyecto está en constante desarrollo, y se agregarán nuevas funcionalidades y mejoras según sea necesario.
