const express = require("express");
const Scategorie = require("../models/scategorie.js")
const router = express.Router()





router.post('/', async (req, res) => {
    const {nomscategorie, imagescat, categorieID} = req.body;

    try {
        const scat = new Scategorie({
            nomscategorie: nomscategorie,
            imagescat: imagescat,
            categorieID: categorieID
        })

     await Scategorie.save();
        res.status(200).json(scat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})





router.get('/', async (req, res) => {
    try {
      const scat=  await Scategorie.find()
        res.status(200).json(scat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

module.exports=router

