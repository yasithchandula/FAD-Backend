const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "resortsooriya@gmail.com",
    pass: "jeyqmnctscnjdcbe",
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: "express-handlebars",
    viewPath: "./common/views/",
  })
);
function sendEmail(email, text) {
  var mailOptions = {
    from: "resortsooriya@gmail.com",
    to: email,
    subject: "Sooriya Resort, Koggala",
    text: `${text}`,
    template: "index",
    context: {
      name: "Name",
    },
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = {
  sendEmail,
};
