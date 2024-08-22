const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const registroc=require("../models/formsc");
const ErrorHandler = require("../utils/errorHandler");

// Lista de registros de condiciones inseguras
exports.getregitersc = cathAsyncErrors (async (req, res, next) => {

       
        const registrosc = await registroc.find();
        if(!registrosc){
            return  next(new ErrorHandler("Información no encontrada", 404))
            }
       
        res.status(200).json({
            success: true,
            count: registrosc.length,
            registrosc,
        });
    
});

// ver un registro de condicion insegura por ID

exports.getRegistercById= cathAsyncErrors(async(req,res,next)=>{
    
    const condition= await registroc.findById(req.params.id)
    if(!condition){
        return  next(new ErrorHandler("Registro no encontrado", 404))
        }   

        res.status(200).json({
            success:true,
            message: "El registro seleccionado es:",
            condition
    })
})

// crear un condicion insegura /registerc

exports.newRegisterc = cathAsyncErrors(async (req, res, next) => {
    try {
        req.body.user = req.user.id;

        const registerc = await registroc.create(req.body);

        if (!registerc) {
            return next(new ErrorHandler("Registro no encontrado", 404));
        }

        res.status(201).json({
            success: true,
            registerc
        });
    } catch (error) {
        console.error('Error en newRegisterc:', error);
        next(error);
    }
});