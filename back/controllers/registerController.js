
const registroa=require("../models/formsa");

// Lista de registros de actos inseguros
exports.getregiters= async(req,res,next) =>{
    const registrosa= await registroa.find();
    res.status(200).json({
        success:true,
        count:registrosa.length,
        registrosa,
    })
}

// ver un registro de acto inseguro por ID

exports.getRegisterById= async(req,res,next)=>{
    const act= await registroa.findById(req.params.id)
    if(!act){
        return res.status(404).json({
            success:false,
            message: "No se encuntra el registro indicado"
        })
    }
    res.status(200).json({
        success:true,
        message: "El registro seleccionado es:",
        act
    })
}

// crear un acto inseguro /registera

exports.newRegistera=async(req,res,next)=>{
    const registera= await registroa.create(req.body);

    res.status(201).json({
        success:true,
        registera
    })
}
