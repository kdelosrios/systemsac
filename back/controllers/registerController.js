const registroa=require("../models/formsa");

exports.getregiters=(req,res,next) =>{
    res.status(200).json({
        sucess:true,
        message:"En esta ruta ud va a poder ver todos los registros"
    })

}

// crear un acto inseguro /registera

exports.newRegistera=async(req,res,next)=>{
    const registera= await registroa.create(req.body);

    res.status(201).json({
        success:true,
        registroa
    })
}

