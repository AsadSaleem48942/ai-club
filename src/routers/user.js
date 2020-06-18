const express = require('express')
const multer = require('multer')
const User = require('../models/user')
const {welcome,goodbye} = require('../emails/account')
const auth = require('../middleware/auth')
const sharp =  require('sharp')
const router = new express.Router()

// USER
// Creating a new user using post method //SIGNUP
// Generating Tokens

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        welcome(user.email,user.name)
        const token = await user.generateAuthtoken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

// Reading all users using get method
router.get('/users/me',auth,async(req,res)=>{
    res.send(req.user)
})

// Updating users by id using patch method
router.patch('/users/me',auth,async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if(!isValid){
        return res.status(400).send({error:'Invalid updates'})
    }
    try{
        updates.forEach((update)=> req.user[update] = req.body[update])
        await req.user.save()
        res.status(200).send(req.user)
    }catch(e){
        res.status(400).send(e)

    }
})

// Deleting User by id
router.delete('/users/me',auth,async(req,res)=>{
    try{
        
        await req.user.remove()
        goodbye(req.user.email,req.user.name)
        res.send(req.user)
    }catch(e){
        res.status(500).send()
    }

})

// LOGIN
router.post('/users/login', async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthtoken()
        res.send({ user ,token})
    }catch(e){
        res.status(400).send()
    }
})


// LOGOUT
router.post('/users/logout',auth,async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        }) 
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

// LOGOUT All
router.post('/users/logoutall',auth,async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }
    catch(e){
        res.status(500).send()
    }
})

// Adding profile picture
const upload = multer({
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file , cb){

        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Route Supports jpg jpeg and png files only'))
        }
        cb(undefined,true)
    }
})

router.post('/users/me/avatar',auth,upload.single('avatar'),async(req,res)=>{
    
    const buffer = await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})


// Removing Profile picture
router.delete('/users/me/avatar',auth,async(req,res)=>{
        req.user.avatar = undefined
        await req.user.save()
        res.send()
})


// Fetching Avatar
router.get('/users/:id/avatar',async(req,res)=>{

    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error('Nothing Found')
        }
        res.set('Content-Type','image/png')
        res.send(user.avatar)

    }catch(e){
        res.status(404).send()   
     }

})

module.exports = router