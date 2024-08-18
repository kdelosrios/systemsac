const mongoose=require("mongoose")


const registercSchema = mongoose.Schema({
    fecha: {
        type: Date,
        required: [true, "Por favor indique la fecha"],
        default: Date.now
    },
    descripcion: {
        type: String,
        required: [true, "Por favor relacione una descripción clara y detallada"]
    },
    riesgo: {
        type: [String],
        enum: ['Físico','Químico','Biologico','Biomecánico','Psicosocial','Condiciones de Seguridad','Eléctrico','Mecánico'],
        required: [true, "Por favor seleccione el riesgo"]
    },
    caracteristicas: {
        type: [String],
        enum: ['Equipos sin guardas','Áreas peligrosas sin restricción','Iluminación deficiente','Ventilación inadecuada','Pisos resbaladizos o en mal estado','Falta de señalización de peligro','Almacenamiento inadecuado de sustancias o materiales','Falta de mantenimiento de equipos','Ruido Excesivo'],
        required: [true, "Por favor seleccione la caracteristica del acto inseguro"]
    },
    area: {
        type: [String],
        enum: ['Producción','Mantenimiento','CEDI','Materias primas','Gestión humana'],
        required: [true, "Por favor seleccione el área donde evidenció el acto inseguro"]
    },

});

module.exports= mongoose.model("registerc",registercSchema)