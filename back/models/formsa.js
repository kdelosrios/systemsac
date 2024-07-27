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
        enum: ['Físicos', 'Químicos', 'Biológicos', 'Biomecánicos', 'Psicosocial', 'Condiciones de Seguridad', 'Eléctrico', 'Mecánicos'],
        required: [true, "Por favor seleccione el riesgo"]
    },
    caracteristicas: {
        type: [String],
        enum: ['No uso de EPP', 'Ingreso a zonas restringidas', 'Manipulación incorrecta de equipos', 'Ignorar procedimientos de seguridad', 'Postura y movimientos incorrectos', 'Falta de atención o concentración', 'Uso inadecuado de herramientas', 'Uso inseguro de sustancias o materiales'],
        required: [true, "Por favor seleccione la caracteristica del acto inseguro"]
    },
    area: {
        type: [String],
        enum: ['Producción', 'Mantenimiento', 'CEDI', 'Materias primas'],
        required: [true, "Por favor seleccione el área donde evidenció el acto inseguro"]
    },
    realizo_investigacion: {
        type: Boolean,
        default: false,
        required: [true, "Por favor indique si realizó retroalimentación al trabajador"]
    }
});

module.exports= mongoose.model("registera",registeraSchema)