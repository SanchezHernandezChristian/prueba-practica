Instrucciones de uso

Pasos para iniciar la aplicacion:

* Clonar desde el repositorio https://github.com/SanchezHernandezChristian/prueba-practica.git
* Cambiar los accesos y direccion del manejador de base de datos en el archivo: Config/config.json (la base de datos seleccionada es mySQL)
* Teclear el comando: npm run iniciar

La aplicacion quedara iniciada con los datos iniciales creados.

Para ejecutar la aplicacion teclear: nodemon app.js O npm run dev 

Para ejecutar las pruebas teclear: npm run test.


Rutas de acceso:
La url sera determinado por donde se accese a la aplicacion

CRUD Empresa:
    Obtener empresas: get("URL/api/empresas");
    Crear empresa: post("URL/api/empresas");
        Datos para crear correctamente: 
            {
                nombre_legal: "nombre",
                nombre_comercial: "nombre",
                rfc: "alfanumerico",
                telefono: "numerico",
                fecha_registro: new Date(),
            },
    Editar empresa: put("URL/api/empresas/:idempresa");
    Datos para crear correctamente (puede ser uno o varios): 
            {
                nombre_legal: "nombre",
                nombre_comercial: "nombre",
                rfc: "alfanumerico",
                telefono: "numerico",
                fecha_registro: new Date(),
            },
    Eliminar empresa: delete("URL/api/empresas/:idempresa");

CRUD Usuario: 
    Obtener Usuarios: get("URL/api/usuarios");
    Crear usuario: post("URL/api/usuarios");
        Datos para crear correctamente: 
            {
                nombre: "nombre",
                apellido: "apellido",
                correo: "correo@dominio",
                password: "contraseña",
                rolId: id de un rol ,
                empresaId: id de una empresa,
            },
    Editar usuario: put("URL/api/usuarios/:idusuario");
        Datos para crear correctamente (puede ser uno o varios): 
            {
                nombre: "nombre",
                apellido: "apellido",
                correo: "correo@dominio",
                password: "contraseña",
                rolId: id de un rol ,
                empresaId: id de una empresa,
            },
    Eliminar usuario: delete("URL/api/usuarios/:idusuario");

Los datos de los roles quedaron en el orden inicial indicado:
admin
manager
accounting
employee



