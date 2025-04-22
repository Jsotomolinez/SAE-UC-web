"use server"

import { z } from "zod"
import dotenv from "dotenv"
dotenv.config()

// Esquema de validación para los datos del formulario
const emailSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function sendEmail(formData: unknown) {
  try {
    // Validar los datos del formulario
    const { name, email, subject, message } = emailSchema.parse(formData)

    // Importar nodemailer dinámicamente para evitar problemas en Server Actions
    const nodemailer = (await import("nodemailer")).default

    // Configurar el transporte de correo
    // Nota: En producción, deberías usar variables de entorno para estas credenciales
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Cambia esto según tu proveedor de correo
      port: 587,
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Configurar el correo
    const mailOptions = {
      from: `"Formulario de Contacto" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje: ${subject}`,
      text: message,
      html: `
        <div>
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    }

    // Enviar el correo
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido",
    }
  }
}
