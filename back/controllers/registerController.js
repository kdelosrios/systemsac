
const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const registroa=require("../models/formsa");
const ErrorHandler = require("../utils/errorHandler");

// Lista de registros de actos inseguros
exports.getregiters = cathAsyncErrors (async (req, res, next) => {
 
        const registrosa = await registroa.find();

        if(!registrosa){
            return  next(new ErrorHandler("Información no encontrada", 404))
            }
       
        res.status(200).json({
            success: true,
            count: registrosa.length,
            registrosa,
        });

});

// ver un registro de acto inseguro por ID

exports.getRegisterById= cathAsyncErrors (async(req,res,next)=>{
    const act=  await registroa.findById(req.params.id)

    if(!act){
        return  next(new ErrorHandler("Registro no encontrado", 404))
        }
    
    res.status(200).json({
        success:true,
        message: "El registro seleccionado es:",
        act
    })
})

// crear un acto inseguro /registera

exports.newRegistera = cathAsyncErrors(async (req, res, next) => {
  try {
      req.body.user = req.user.id;  // Asegúrate de que req.user exista y tenga id
      const registera = await registroa.create(req.body); // Verifica que registroa sea el modelo correcto
      
      if (!registera) {
          return next(new ErrorHandler("No se pudo crear el registro", 404));
      }

      res.status(201).json({
          success: true,
          registera
      });
  } catch (error) {
      console.error('Error en newRegistera:', error); 
      next(error); 
  }
});