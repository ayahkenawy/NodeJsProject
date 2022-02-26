const nodemailer = require("nodemailer")
const smtpConfig = {
    service:"gmail",
    auth:{
        user:"nodejsg4@gmail.com",
        pass:"NodeJs@4490"
    }
}
const sendMyEmail = async (reciverEmail, text, from, sub)=>{
    try{
        const transporter = await nodemailer.createTransport(smtpConfig)
        const mailOptions = {
            from:from,
            to: reciverEmail,
            subject:sub,
            html: text
        }
        await transporter.sendMail(mailOptions)
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = sendMyEmail