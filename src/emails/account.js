require('dotenv').config()
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});

const welcome = (email,name)=>{

    let mailoption = {
    from: `"WELCOME | Team AIC" <${process.env.EMAIL}>`,
    to: email,
    subject:'WELCOME TO AIC!',
    text:`Hello ${name}! Your account has been created for AIC website.`
}

transporter.sendMail(mailoption,(err,data)=>{
    if(err){
        return err
    }else{
        return data
    }
})
}

const goodbye = (email,name)=>{

    let mailoption = {
        from: `"GOODBYE | Team AIC" <${process.env.EMAIL}>`,
        to: email,
        subject: 'YOUR ACCOUNT HAS BEEN REMOVED',
        text:`Goodbye ${name}! Hope you'll be back soon.`
}
    transporter.sendMail(mailoption,(err,data)=>{
        if(err){
            return err
        }else{
            return data
    }
})

}


module.exports = {welcome,goodbye}