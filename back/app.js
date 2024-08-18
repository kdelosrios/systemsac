const express= require("express")
const app=express();
const errorMiddleware = require ("./middleware/errors")
const cookieParser= require("cookie-parser")

//Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

//importar rutas
const registros=require("./routes/register")

app.use('/api',registros)

// Middleware para manejo de errores
app.use(errorMiddleware)

module.exports=app