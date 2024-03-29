const express = require("express");
const ScategoryController = require("../controllers/sCategeryController.js")
const router = express.Router()





router.post('/',ScategoryController.createSCategory )





router.get('/',ScategoryController.getAllScategories )

module.exports=router

