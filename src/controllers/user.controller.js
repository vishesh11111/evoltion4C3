
const express = require("express");
const router = express.Router();
const {body, validationResult}  = require("express-validator");
const upload  =require("../middlewares/uploade");

const User = require("../models/users.model");

router.post("",
body("firstName").not().isEmpty()
.custom((value)=>{
    if((value >3) || (value<30)){
        return true;
    }
    throw new Error("Enter Valid Name");
}),
body("lastName").not().isEmpty()
.custom((value)=>{
    if((value >3) || (value<30)){
        return true;
    }
    throw new Error("Enter Valid Name");
}),
body("age").not().isEmpty()
.custom((value)=>{
    if((value >1) || (value<150)){
        return true;
    }
    throw new Error("Enter Valid Name");
}),
body("email").not().isEmpty().isEmail(), 
upload.any("profile"), 
async(req, res)=>{
    try {
        const errors = validationResult(req);
        console.log({ errors });
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
  
        const users = await User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            profile : req.file.path
        });

        return res.status(200).send({user: users})
    } catch (error) {
        return res.send({message : error.message});
    }
});

router.get("", async(req,res)=>{
    try {
        const users = await User.findOne().lean().exec();

        return res.send({user: users});

    } catch (error) {
        return res.send({message : error.message});

    }
});

router.get("/:id", async(req,res)=>{
    try {
        const users = await User.findById().lean().exec();
        return res.send({user: users});

    } catch (error) {
        return res.send({message : error.message});

    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const users = await User.findByIdAndUpdate(req.body,req.params.id,{
            new: true,
        })
        return res.send({user: users});

    } catch (error) {
        return res.send({message : error.message});

    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const users = await User.findByIdAndDelete(req.body);
        return res.send({user: users});

    } catch (error) {
        return res.send({message : error.message});

    }
});

module.exports = router;