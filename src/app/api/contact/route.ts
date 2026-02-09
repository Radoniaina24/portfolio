import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // console.log(usre);
    const body = await req.json();
    const { name, email, message, subject } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: `"Formulaire site web" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_USER, // Le destinataire : contact@carrefour-emploi.com
      cc: "calebdev777@gmail.com",
      subject: `Nouveau message de ${name}`,
      html: `<div
  style="
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
    background: #ffffff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    color: #333;
  "
>
  <p style="margin: 0 0 12px">
    <strong>Nom :</strong> ${name}
  </p>

  <p style="margin: 0 0 12px">
    <strong>Email :</strong>
    <a
      href="mailto:${email}"
      style="color: #1976d2; text-decoration: none"
    >
      ${email}
    </a>
  </p>

  <p style="margin: 0 0 20px">
    <strong>Sujet :</strong> ${subject}
  </p>

  <div
    style="
      background: #f5f7fa;
      padding: 16px;
      border-radius: 6px;
      border-left: 4px solid #1976d2;
    "
  >
    <p style="margin: 0; font-style: italic">
      ${message}
    </p>
  </div>
</div>
`,
    };
    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Erreur détaillée:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 },
    );
  }
}
