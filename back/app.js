const express= require("express")
const app=express();

app.use(express.json());

//importar rutas
const registros=require("./routes/register")

app.use('/login',registros)// Agregar la ruta de la página principal(login)

module.exports=app