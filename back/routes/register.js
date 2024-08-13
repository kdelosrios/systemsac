const express=require("express")
const router=express.Router();

const {getregiters, newRegistera, getRegisterById}= require("../controllers/registerController")
const {getregitersc, newRegisterc, getRegistercById}= require("../controllers/registercController")

// Actos inseguros 
router.route('/registroa').get(getregiters)
router.route('/newregistroa').post(newRegistera);
router.route('/registroa/:id').get(getRegisterById);

// condiciones inseguras

router.route('/registroc').get(getregitersc)
router.route('/newregistroc').post(newRegisterc);
router.route('/registroc/:id').get(getRegistercById);


module.exports=router;
