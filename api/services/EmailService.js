
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const transporter = nodemailer.createTransport(smtpTransport({
    host: 'localhost',
    port: 25,
    ignoreTLS: true
  })
);

module.exports = {

    sendActivationEmail: function(email, userId, userPassword) {
      const mailOptions = {
        from: 'test@cloudmaps.ru' ,
        to: email,
        subject: 'User Activation Email',
        text: 'http://localhost:1337/user/register/?id=' + userId + '&t=' + userPassword
      };
      return new Promise(function(resolve, reject) {
        transporter.sendMail(mailOptions, function(error, info){
          if(error){
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
        
    }
}
