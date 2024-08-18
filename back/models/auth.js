const mongoose = require ('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt=require("jsonwebtoken")


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
    role:{
    type: String,
        enum: ["admin", "user"], 
        default: "user", 
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

// encriptar la contraseña
    
usuarioSchema.pre("save", async function(next){
        if(!this.isModified("password")){
            next()
        }
        this.password =await bcrypt.hash(this.password, 10)
})

//descodificamos contraseñas y se compara contraseñas

usuarioSchema.methods.compararPass= async function(passDada){
        return await bcrypt.compare(passDada, this.password)
    }

//Token para la contraseña de cada usuario(retornar un JWT token)

usuarioSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIEMPO_EXPIRACION,
    });
  };



module.exports = mongoose.model("auth",usuarioSchema)
