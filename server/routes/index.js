const express = require('express');
const router = express.Router();
const proyectoController=require('../controllers/proyectoController');
const usuariosController=require('../controllers/usuariosController');

module.exports = function () {

    // crea un nuevo proyecto
    router.post('/proyectos', proyectoController.nuevoProyecto) ;
    // obtiene todos los proyectos
    router.get('/proyectos', proyectoController.obtenerProyectos) ;
    // elimina un proyecto
    router.delete('/proyectos/:idProyecto', proyectoController.eliminarProyecto) ;
    // editar un proyecto
    router.put('/proyectos/:idProyecto', proyectoController.editarProyecto) ;
    // obtiene un proyecto por id
    router.get('/proyectos/:idProyecto', proyectoController.obtenerProyecto) ;

    // crear usuarios
    router.post('/crear-cuenta', usuariosController.registrarUsuario);
    router.post('/iniciar-sesion', usuariosController.autenticarUsuario);

    return router;
}