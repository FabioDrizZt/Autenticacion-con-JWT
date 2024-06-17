### Descripción del Repositorio

Este repositorio contiene un servidor backend desarrollado en Node.js con Express, configurado para autenticar usuarios y proporcionar acceso a recursos protegidos utilizando JSON Web Tokens (JWT). A continuación se detalla su estructura y funcionalidades principales:

#### Tecnologías Utilizadas:
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework web para Node.js que facilita la creación de aplicaciones y APIs.
- **jsonwebtoken**: Librería para generar y verificar JSON Web Tokens.

#### Estructura del Proyecto:
- **`index.js`**: Punto de entrada del servidor.
- **`data/usuarios.js`**: Archivo de datos simulados de usuarios.
- **`data/productos.js`**: Archivo de datos simulados de productos.

#### Funcionalidades Principales:

1. **Autenticación de Usuarios**:
   - Endpoint `POST /login`: Permite a los usuarios autenticarse proporcionando un nombre de usuario y contraseña. Si las credenciales son válidas, se genera un JWT que debe ser utilizado para acceder a rutas protegidas.

2. **Endpoints Protegidos**:
   - **`GET /productos`**: Devuelve una lista de productos. Esta ruta está protegida por JWT; el cliente debe incluir el token válido en el encabezado de autorización para acceder a la información.
   - **`GET /protected`**: Ejemplo de ruta protegida que muestra un mensaje personalizado utilizando el nombre de usuario decodificado del JWT.

3. **Middleware**:
   - `express.json()`: Middleware para parsear los datos en formato JSON.
   - `verifyToken`: Middleware personalizado para verificar la autenticidad del JWT proporcionado en las rutas protegidas. Si el token es válido, permite el acceso; de lo contrario, devuelve un error de autorización.

4. **Configuración**:
   - Puerto de escucha configurable a través de una variable de entorno (`PORT`).
   - Clave secreta para firmar y verificar los JWT (`SECRET_KEY`), almacenada también en una variable de entorno para seguridad.

#### Uso:
- Clonar el repositorio, instalar las dependencias necesarias y configurar las variables de entorno requeridas (`PORT` y `SECRET_KEY`).
- Ejecutar el servidor con `node index.js` y probar los endpoints utilizando herramientas como Postman o cURL.

#### Notas Adicionales:
- Este proyecto es útil para aprender cómo implementar autenticación basada en tokens JWT en una aplicación Node.js, así como la estructura básica de un servidor con Express.
