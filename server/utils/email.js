const nodemailer = require("nodemailer");
const pug = require("pug");
const { htmlToText } = require("html-to-text");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

// Email Class
module.exports = class Email {
  constructor(email, url) {
    this.to = email;
    this.url = url;
    this.from = `Quantum <${process.env.GRID_EMAIL_FROM}>`;
  }

  async sendMail(template, subject) {
    const html = pug.renderFile(
      `${__dirname}/../template/email/${template}.pug`,
      {
        url: this.url,
      }
    );

    const mailOptions = {
      to: this.to,
      from: this.from,
      subject,
      html,
      text: htmlToText(html, {
        wordwrap: 130,
      }),
    };

    try {
      await sgMail.send(mailOptions);
      console.log("Email success");
    } catch (err) {
      console.log(err);
    }
  }

  async sendWelcome() {
    await this.sendMail("welcome", "Welcome to the Quantum 🙏");
  }

  async sendVerifyEmail() {
    await this.sendMail("verifyEmail", "Sign in to Quantum 📲");
  }
};
