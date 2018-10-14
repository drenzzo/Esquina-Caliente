module.exports = function(grunt){
//Cargamos los paquetes de grunt
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express');
 
//Crear tareas
grunt.registerTask('server', ['express', 'watch']); // 'servidor' es el nombre de la tarea seguido de la tarea a ejecutar, en este caso 'express'
 
//Configuración
grunt.initConfig({
  watch: {
       html: {
         files: 'public/**'
       }
     },
 
  express: {        //Tarea automatica express
    all: {
      options: {
       livereload: true,    //Función utilizada para refrescar la página automáticamente cuando hacemos cambios en el código fuente.
       port: 8000,      //El puerto
       bases: ['public'],    //El directorio raíz donde encontramos a index.html
       open: 'http://localhost:8000' //Host
      }
    }
  }
});
};