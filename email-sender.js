// email-sender.js
const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'valeparfait@gmail.com',
        pass: 'nApu3XOVC9'
    }
});

// Définir les options de l'e-mail
let mailOptions = {
    from: 'valeparfait@gmail.com',
    to: 'daoudapeace005@gmail.com',
    subject: 'Test d\'envoi d\'e-mail avec Node.js',
    html: '<h1>Bonjour !</h1><p>Ceci est un e-mail envoyé depuis Node.js.</p>'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Erreur d\'envoi d\'e-mail:', error);
    }
    console.log('E-mail envoyé:', info.response);
});
