const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name : {type: String, required: true, default: 0},    
    bookId : {type: mongoose.Schema.Types.ObjectId,
    ref: "book", required: false},
},
{
    versionKey: false,
    timestamps: false
});

const bookModel = mongoose.model("publication", bookSchema);

module.exports = bookModel;