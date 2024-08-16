const express=require("express")
const router=express.Router();

const {getregiters, newRegistera, getRegisterById}= require("../controllers/registerController")
const {getregitersc, newRegisterc, getRegistercById}= require("../controllers/registercController");
const { registroUsuario } = require("../controllers/authController");


// Actos inseguros 
router.route('/registroa').get(getregiters)
router.route('/newregistroa').post(newRegistera);
router.route('/registroa/:id').get(getRegisterById);

// condiciones inseguras

router.route('/registroc').get(getregitersc)
router.route('/newregistroc').post(newRegisterc);
router.route('/registroc/:id').get(getRegistercById);

// Usuarios

router.route('/usuario/registro').post(registroUsuario)


module.exports=router;
