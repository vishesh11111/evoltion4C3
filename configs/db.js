
const mongoose = require("mongoose");
// const { modelName  = require("../models/users.model");

const connect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/SmallBook");
}

module.exports = connect;