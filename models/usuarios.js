const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: true
        },
        userName:{
            type : String,
            required: true
        },
       // create:{ // guarda automaticamente por default la fecha en que es creado cada registro
        //    type: Date,
        //    default: Date.now
       // }
    },
    {
        versionKey: false, // evita que se guarde/muestre la version de cada registro
        timestamps: true // muestra fecha de creacion y modificacion de cada registro
    }
)

module.exports = mongoose.model('User', usuariosSchema)