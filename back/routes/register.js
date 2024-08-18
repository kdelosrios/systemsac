const express=require("express")
const router=express.Router();

const {getregiters, newRegistera, getRegisterById}= require("../controllers/registerController")
const {getregitersc, newRegisterc, getRegistercById}= require("../controllers/registercController");
const { registroUsuario, loginUser } = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


// Actos inseguros prueba de autenticación
router.route('/registroa').get(/*isAuthenticatedUser,authorizeRoles('admin'),*/ getregiters)
router.route('/newregistroa').post(newRegistera);
router.route('/registroa/:id').get(getRegisterById);

// condiciones inseguras

router.route('/registroc').get(getregitersc)
router.route('/newregistroc').post(newRegisterc);
router.route('/registroc/:id').get(getRegistercById);

// Usuarios

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser)


module.exports=router;
