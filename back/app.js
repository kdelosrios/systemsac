const express= require("express")
const app=express();

app.use(express.json());

//importar rutas
const registros=require("./routes/register")

app.use('/api',registros)

module.exports=app