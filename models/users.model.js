
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: false},
    age: {type: Number, required: true},
    email : {type: String, required: true, unique: true},
    profile : {type: String, required: false},
},
{
    versionKey: false,
    timestamps: false
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;