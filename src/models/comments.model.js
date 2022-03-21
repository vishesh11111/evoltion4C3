
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
   body : {type: mongoose.Schema.Types.ObjectId
    ,ref: "user", required: true},   
    bookId : {type: mongoose.Schema.Types.ObjectId
        ,ref: "book", required: true}, 
},
{
    versionKey: false,
    timestamps: false
});

const bookModel = mongoose.model("comments", bookSchema);

module.exports = bookModel;