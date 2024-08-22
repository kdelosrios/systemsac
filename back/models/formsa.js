const mongoose=require("mongoose")


const registeraSchema = mongoose.Schema({
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
        enum: ['Físico', 'Químico', 'Biológico', 'Biomecánico', 'Psicosocial', 'Condiciones de Seguridad', 'Eléctrico', 'Mecánico'],
        required: [true, "Por favor seleccione el riesgo"]
    },
    caracteristicas: {
        type: [String],
        enum: ['No uso de EPP', 'Ingreso a zonas restringidas', 'Manipulación incorrecta de equipos', 'Ignorar procedimientos de seguridad', 'Postura y movimientos incorrectos', 'Falta de atención o concentración', 'Uso inadecuado de herramientas', 'Uso inseguro de sustancias o materiales'],
        required: [true, "Por favor seleccione la caracteristica del acto inseguro"]
    },
    area: {
        type: [String],
        enum: ['Producción', 'Mantenimiento', 'CEDI', 'Materias primas','Gestión Humana'],
        required: [true, "Por favor seleccione el área donde evidenció el acto inseguro"]
    },

    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required:true
    }

});

module.exports= mongoose.model("registera",registeraSchema)