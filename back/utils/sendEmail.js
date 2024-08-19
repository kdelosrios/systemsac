const nodemailer = require("nodemailer");

// Se toma de la página mailtrap
const sendEmail = async (options) => {
    // Configuración del transportador
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'raina83@ethereal.email',
            pass: 'EaReM6CHvt831gCNt6'
        }
    });
    // Configuración del mensaje
    const mensaje = {
        from: "Systemsac <noreply@systemsac.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    };

    // Enviar el correo
    await transporter.sendMail(mensaje); 
};

module.exports = sendEmail;