const express = require("express");
const Joi = require("joi");



const app = express();



const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).alphanum().required(),
    firstname: Joi.string().alphanum().required(),
    lastname: Joi.string().alphanum().required()
})

app.post("/register", async(req,res) => {
    try{
        const value = await schema.validateAsync({
            email:req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        })
    } catch(e){
        console.log(e);
    }
})

app.listen(3000, function(){
    console.log("Listening on port 3000");
})