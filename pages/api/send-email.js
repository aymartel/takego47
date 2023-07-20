import nodemailer from 'nodemailer';

const gmailuser="aymartel@gmail.com"
const gmailToken="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"

export default async (req, res) => {
  if (req.method === 'POST') {
    const {  name, email, number, message } = req.body;

    // Configurar el transporte
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.yandex.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: emailUser,
    //     pass: emailPass
    //   }
    // });

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: gmailuser,
        accessToken: gmailToken,
      },
    });
    // Configurar el correo electrónico
    const mailOptions = {
      from: gmailuser,
      to: email,
      subject: `Nuevo mensaje de ${name}`,
      html: mailTemplate( name, number, message),
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error al enviar el correo electrónico');
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
        res.send('Correo electrónico enviado');
      }
    });
  } else {
    res.status(405).send('Método no permitido');
  }
};

const mailTemplate = (name,  number, message ) => `
  <html>
    <head>
      <style>
        body {
          background-color: #422B7C;
          color: white;
          font-family: sans-serif;
          padding: 20px;
        }

        h1 {
          color: #EBA900;
        }
      </style>
    </head>
    <body>
      <h1>Nuevo mensaje de ${name}</h1>
      <h2>Phone: ${number}</h2>
      <p>${message}</p>
    </body>
  </html>
`;