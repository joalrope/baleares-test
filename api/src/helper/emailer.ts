import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "joalrope@gmail.com",
		pass: "Cheo.-2436",
	},
});

const mensaje = "<p>Hola desde nodejs...</p>";

const mailOptions = {
	from: "joalrope@gmail.com",
	to: "mi-amigo@yahoo.com",
	subject: "Asunto Del Correo",
	html: mensaje,
};

transporter.sendMail(mailOptions, function (error: any, info: any) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email enviado: " + info.response);
	}
});
