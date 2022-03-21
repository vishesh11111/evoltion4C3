const express = require("express");

const router = express();

const userController = require("./controllers/user.controller");
const bookController = require("./controllers/book.controller");
const publicController = require("./controllers/publication.controller");
const commentController = require("./controllers/comment.controller");


router.use(express.json());
router.use("/users", userController);
router.use("/books", bookController);
router.use("/publics", publicController);
router.use("/comments", commentController);
module.exports = router;