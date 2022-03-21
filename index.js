const express = require("express");

const router = express();

const userController = require("./controllers/user.controller");


router.use(express.json());
router.use("/users", userController);

module.exports = router;