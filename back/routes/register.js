const express=require("express")
const router=express.Router();

const {getregiters, newRegistera}= require("../controllers/registerController")

router.route('/registroa').get(getregiters)
router.route('/newregistroa').post(newRegistera);

module.exports=router;
