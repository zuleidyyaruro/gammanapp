const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const proyectosSchema=new Schema({
    nombre:{
        type:String,
        trim:true,
    },
})

module.exports=mongoose.model('Proyectos', proyectosSchema);