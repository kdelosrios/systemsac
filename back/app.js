const express= require("express")
const app=express();
const errorMiddleware = require ("./middleware/errors")

app.use(express.json());

//importar rutas
const registros=require("./routes/register")

app.use('/api',registros)

// Middleware para manejo de errores
app.use(errorMiddleware)

module.exports=app