
const registroc=require("../models/formsc");

// Lista de registros de condiciones inseguras
exports.getregitersc = async (req, res, next) => {
    try {
        const registrosc = await registroc.find();
        /*console.log('Datos enviados:', registrosc); */
        res.status(200).json({
            success: true,
            count: registrosc.length,
            registrosc,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ver un registro de condicion insegura por ID

exports.getRegistercById= async(req,res,next)=>{
    const condition= await registroc.findById(req.params.id)
    if(!condition){
        return res.status(404).json({
            success:false,
            message: "No se encuntra el registro indicado"
        })
    }
    res.status(200).json({
        success:true,
        message: "El registro seleccionado es:",
        condition
    })
}

// crear un condicion insegura /registerc

exports.newRegisterc=async(req,res,next)=>{
    const registerc= await registroc.create(req.body);

    res.status(201).json({
        success:true,
        registerc
    })
}

