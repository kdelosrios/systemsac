const User =require ("../models/auth")
const jwt=require("jsonwebtoken")
const ErrorHandler=require("../utils/errorHandler")
const cathAsyncErrors=require("../middleware/cathAsyncErrors")


// Verificar si el usuario est aautenticado(verificar el token)
exports.isAuthenticatedUser= cathAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies

    if(!token){
        return next(new ErrorHandler("Debe iniciar sesión para acceder a este recurso",401))
    }

    const decodificada= jwt.decode(token, process.env.JWT_SECRET)
    req.user=await User.findById(decodificada.id);

    next()
})


//Capturamos role

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        console.log('Roles permitidos:', roles);
        console.log('Rol del usuario:', req.user ? req.user.role : 'No hay usuario');

        if (!req.user || !roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Rol (${req.user ? req.user.role : 'desconocido'}) no está autorizado entrar a esta área`, 403));
        }
        next();
    }
}

