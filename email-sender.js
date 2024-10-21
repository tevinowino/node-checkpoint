const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: { user: '', pass: '' }
});

// Email options
const mailOptions = {
    from: '',
    to: '', // Change to your recipient email
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent from Node.js.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ' + error);
    }
    console.log('Email sent: ' + info.response);
});
