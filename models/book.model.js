
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    like : {type: Number, required: true, default: 0},
    coverImage : {type: mongoose.Schema.Types.ObjectId,
        ref: "user", required: 1},
    content : {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId,
    ref: "user", required: false},    
    CommentId : {type: mongoose.Schema.Types.ObjectId,
    ref: "book", required: false},
},
{
    versionKey: false,
    timestamps: false
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;