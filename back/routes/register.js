const express=require("express")
const router=express.Router();

const {getregiters, newRegistera, getRegisterById}= require("../controllers/registerController")
const {getregitersc, newRegisterc, getRegistercById}= require("../controllers/registercController");
const { registroUsuario, loginUser, logout, forgotPassword, resetPassword, getUserByID, updatePassword, updateProfile, getAllUsers, getUsuarioById, deleteUser } = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


// Actos inseguros prueba de autenticación 
router.route('/registroa').get(isAuthenticatedUser,getregiters)
router.route('/newregistroa').post(isAuthenticatedUser, newRegistera);
router.route('/registroa/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getRegisterById);

// condiciones inseguras

router.route('/registroc').get(isAuthenticatedUser, getregitersc)
router.route('/newregistroc').post(isAuthenticatedUser,newRegisterc);
router.route('/registroc/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getRegistercById);

// Rutas para los Usuarios (user)

router.route('/usuario/registro').post(isAuthenticatedUser,authorizeRoles('admin'), registroUsuario)
router.route('/login').post(loginUser)
router.route('/logout').get( isAuthenticatedUser,logout)
router.route('/forgotPassword').post(forgotPassword)
router.route('/resetPassword/:token').post(resetPassword)
router.route('/userid').get(isAuthenticatedUser,getUserByID)
router.route('/userid/updatePassword').put(isAuthenticatedUser, updatePassword)


// Rutas para el administrador (admin)
router.route('/updateProfile').put(isAuthenticatedUser, authorizeRoles('admin'), updateProfile)
router.route('/admin/usuarios').get(isAuthenticatedUser,authorizeRoles('admin'), getAllUsers)
router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles('admin'), getUsuarioById)
router.route("/admin/delete/:id").delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)


module.exports=router;