import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';

// instalar npm install dotenv
// https://mail.google.com/

dotenv.config();

export async function POST(req) {
  try {
    const {
      NEXT_PUBLIC_CLIENT_ID,
      NEXT_PUBLIC_CLIENT_SECRET,
      NEXT_PUBLIC_REDIRECT_URI,
      NEXT_PUBLIC_REFRESH_TOKEN,
      NEXT_PUBLIC_USER_EMAIL
    } = process.env;

    const oAuth2Client = new google.auth.OAuth2(
      NEXT_PUBLIC_CLIENT_ID,
      NEXT_PUBLIC_CLIENT_SECRET,
      NEXT_PUBLIC_REDIRECT_URI
    );

    // Establecer credenciales
    oAuth2Client.setCredentials({ refresh_token: NEXT_PUBLIC_REFRESH_TOKEN });

    let accessTokenResponse;
    try {
      accessTokenResponse = await oAuth2Client.getAccessToken();
    } catch (err) {
      console.error('Error obtaining access token:', err);
      return NextResponse.json({ message: 'Failed to obtain access token', error: err.message });
    }

    if (!accessTokenResponse.token) {
      return NextResponse.json({ message: 'Failed to retrieve access token' });
    }

    const accessToken = accessTokenResponse.token;

    // Configurar el transportador de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: NEXT_PUBLIC_USER_EMAIL,
        clientId: NEXT_PUBLIC_CLIENT_ID,
        clientSecret: NEXT_PUBLIC_CLIENT_SECRET,
        refreshToken: NEXT_PUBLIC_REFRESH_TOKEN,
        accessToken: accessToken,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    const { email, ticket } = req.body;

    // Configurar el correo
    const mailOptions = {
      from: 'inLimaApp@gmail.com',
      to: "cabrejos.marcelo@gmail.com",
      subject: `REGINGINGIN`,
      html: `<div>MENSAJE</div>`
    };

    // Enviar el correo
    console.log("enviando mail")
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message });
  }
};