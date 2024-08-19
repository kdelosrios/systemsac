const User = require ("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const cathAsyncErrors=require("../middleware/cathAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail= require("../utils/sendEmail");
const crypto=require('crypto');
const resetPasswordToken  =require('../models/auth')
const getResetPasswordToken =require ('../models/auth')

// Registrar un nuevo usuario /api/usuario

exports.registroUsuario = cathAsyncErrors(async(req, res, next)=>{
    const {nombre,email,role,password}= req.body;
    

    const user = await User.create({
        
        nombre,
        email,
        role,
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

// Cerrar sesión (logout)

exports.logout= cathAsyncErrors(async(req,res,next)=>{
    res.cookie("token", null, {expires:new Date(Date.now()),httpOnly:true})
    res.status(200).json({
        success:true,
        message: "Cerró sesión"
    })  
})

// recuperar contraseña por olvidar contraseña

exports.forgotPassword= cathAsyncErrors(async(req,res,next)=>{
    const user=await User.findOne({email:req.body.email});

    if (!user){
        return next(new ErrorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken=user.getResetPasswordToken();
    
    await user.save({ validateBeforeSave: false });

//Crear una url para hacer el reset de la contraseña

const resetUrl = `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`;

const mensaje = `Hola! \n\nEl link para recuperar la contraseña es el siguiente: \n\n${resetUrl}\n\nSi no solicitaste este link, por favor comunícate con soporte. \n\nAtt:\nSystemAC`;

    try{
        await sendEmail({
            email:user.email,
            subject:"Systemsac recuperación de la contraseña",
            mensaje
        })
        res.status(200).json({
            success:true,
            message:`Correo enviado a: ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message, 500))
    }
})

// Resetear la contraseña

exports.resetPassword= cathAsyncErrors(async(req,res,next)=>{
    // hash el token que llego con la url
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex")
    // Buscamos el usuario al que le vamos a resetear la contraseña

    console.log("Token recibido:", req.params.token);
    console.log("Token hasheado:", resetPasswordToken);

    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{ $gt: Date.now()}
    })
    // El usuario si esta en la BD?
    if(!user){
        return next(new ErrorHandler("El token es invalido o ya expiro",400))
    } // Diligenciamos bien los campos?
    if(req.body.password!==req.body.confirmPassword){
        return next(new ErrorHandler("Contraseñas no coinciden",400))
    }
    // Setear la nueva contraseña
    user.password=req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save();
    tokenEnviado(user, 200,res)
})


