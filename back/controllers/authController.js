const User = require ("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const cathAsyncErrors=require("../middleware/cathAsyncErrors")

// Registrar un nuevo usuario /api/usuario

exports.registroUsuario = cathAsyncErrors(async(req, res, next)=>{
    const {nombre,email,rol,password}= req.body;

    const user = await User.create({
        nombre,
        email,
        rol,
        password,        
    })

    res.status(201).json({
        success:true,
        user
    })
})


