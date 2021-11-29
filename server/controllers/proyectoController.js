const Proyectos = require('../models/Proyectos');

// agregar Proyecto

exports.nuevoProyecto = async (request, response, next) => {
    const proyecto = new Proyectos(request.body);
    try {
        await proyecto.save();
        response.json({ proyecto });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerProyectos = async (request, response, next) => {
    try {
        const proyectos = await Proyectos.find({});
        response.json(proyectos);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarProyecto = async (request, response, next) => {
    try {
        await Proyectos.findOneAndDelete({ _id: request.params.idProyecto });
        response.json({ mensaje: "El cliente se ha eliminado con exito" });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.editarProyecto = async (request, response, next) => {
    try {
        const proyecto = await Proyectos.findOneAndUpdate(
            { _id: request.params.idProyecto }, request.body, { new: true }
        )
        response.json(proyecto);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerProyecto = async (request, response, next) => {

    const proyecto = await Proyectos.findById({ _id: request.params.idProyecto })

    if (!proyecto) {
        response.json({ mensaje: "No existe el cliennte" });
        next();
    }

    response.json(proyecto);

}