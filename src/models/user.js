require('dotenv').config()
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userschema = new mongoose.Schema({ 
    name : {
        type: String,
        required: true,
        trim: true
        },

    email:{
        type: String,
        unique: true,
        required : true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid.')
        }
    }
}
,
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0){
                throw new Error('Age must be a positive number.')
        }
    }
},
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password must not contain password')
        }
    }
},

avatar:{
    type: Buffer
},
    tokens: [{
        token:{
            type: String,
            required: true,
            }
        }],

},
    
    {
    timestamps: true
})



userschema.pre('save', async function(next){
    const user = this
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()

})

userschema.methods.toJSON = function(){
    const user = this
    const userobject = user.toObject()
    
    delete userobject.password
    delete userobject.tokens
    delete userobject.avatar

    return userobject
}


userschema.methods.generateAuthtoken = async function(){
    
    const user = this
    const token = jwt.sign({_id: user._id.toString()},process.env.JWT_SECRETWORD)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token

}

userschema.statics.findByCredentials = async(email,password) =>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Unable to Login')
    }
    const ismatch = await bcrypt.compare(password, user.password)
    if(!ismatch){
        throw new Error('Unable to Login')
    }
    return user
}




const User = mongoose.model('User',userschema)
module.exports = User