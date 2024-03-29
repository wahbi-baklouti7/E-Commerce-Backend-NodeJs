const express = require("express");
const ScategoryController = require("../controllers/sCategeryController.js");
const router = express.Router();

router.route("/").post(ScategoryController.createSCategory).get(ScategoryController.getAllScategories)


module.exports = router;
