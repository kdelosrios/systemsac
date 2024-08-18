const User = require ("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const cathAsyncErrors=require("../middleware/cathAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

// Registrar un nuevo usuario /api/usuario

exports.registroUsuario = cathAsyncErrors(async(req, res, next)=>{
    const {nombre,email,rol,password}= req.body;
    

    const user = await User.create({
        
        nombre,
        email,
        rol,
        password,
    });   

    tokenEnviado(user,201,res)
})


// iniciar sesión

exports.loginUser=cathAsyncErrors(async(req,res,next)=>{
    const {email,password} = req.body;

    // Revisar si los campos están completos

    if(!email || !password){
        return next(new ErrorHandler("Por favor ingrese el email y contraseña"), 400)
    }

    // Revisar si el usuario existe en la BD

    const user=await User.findOne({email}).select("+password")
        if (!user){
            return next(new ErrorHandler("Email o contraseña incorrectos",401))
        }

    // Comparar contraseñas, verificar si está bien

    const contraseñaOK=await user.compararPass(password);

    if(!contraseñaOK){
        return next( new ErrorHandler("Contraseña invalida",401))
    }

    tokenEnviado(user,200,res)


})


