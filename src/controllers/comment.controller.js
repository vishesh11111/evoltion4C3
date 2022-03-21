const express = require("express");
const router = express.Router();

const User = require("../models/comments.model");

router.post("", async(req, res)=>{
    try {
        const users = await User.create();

        return res.send({book: users});

    } catch (error) {
        
        return res.send({message : error.message});

    }
})


router.get("", async(req,res)=>{
    try {
        const users = await User.findOne()
        .populate({path: "body", select: {_id: 0}})
        .populate({path: "bookId", select: {_id: 0}}).lean().exec();
        return res.send({book: users});

    } catch (error) {
        return res.send({message : error.message});

    }
});

router.get("/:id", async(req,res)=>{
    try {
        const users = await User.findById().lean().exec();
        return res.send({book: users});

    } catch (error) {
        return res.send({message : error.message});

    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const users = await User.findByIdAndUpdate(req.body,req.params.id,{
            new: true,
        })
        return res.send({book: users});

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