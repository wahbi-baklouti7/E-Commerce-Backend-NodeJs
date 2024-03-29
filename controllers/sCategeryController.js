

const ScategorieModel = require("../models/scategorie.js")

const createSCategory= async (req, res) => {
    const {nomscategorie, imagescat, categorieID} = req.body;

    try {
        const scat = new ScategorieModel({
            nomscategorie: nomscategorie,
            imagescat: imagescat,
            categorieID: categorieID
        })

     await Scategorie.save();
        res.status(200).json(scat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const getAllScategories= async (req, res) => {
    try {
      const scat=  await ScategorieModel.find()
        res.status(200).json(scat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
} 


module.exports = {createSCategory,getAllScategories}