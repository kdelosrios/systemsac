const mongoose = require ('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const usuarioSchema= new mongoose.Schema({
    nombre:{
        type: String,
        require:[true, "Por favor ingrese el nombre"],
        maxlength:[120, "Nombre no puede exceder los 120 caracteres"]
    },
    email:{
        type: String,
        require:[true, " Por favor ingrese el correo electrónico"],
        unique: true,
        validate: [validator.isEmail, " Por favor ingrese un email valido"]
    },
    rol:{
    type: [String],
        enum: ["administrador", "usuario"], 
        default: "usuario", 
        required: [true, "Por favor seleccione un rol"]
    },
    password:{
        type: String,
        require:[true, "Por favor registre una contraseña"],
        minlength:[8, "Tu contraseña no puede tener menos de 8 caracteres"],
        select: false
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

    
    usuarioSchema.pre("save", async function(next){
        if(!this.isModified("password")){
            next()
        }
        this.password =await bcrypt.hash(this.password, 10)
})


module.exports = mongoose.model("auth",usuarioSchema)
