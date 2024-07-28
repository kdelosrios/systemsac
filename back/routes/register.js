const express=require("express")
const router=express.Router();

const {getregiters, newRegistera, getRegisterById}= require("../controllers/registerController")

router.route('/registroa').get(getregiters)
router.route('/newregistroa').post(newRegistera);
router.route('/registroa/:id').get(getRegisterById);

module.exports=router;
