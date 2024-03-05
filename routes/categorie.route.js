const express = require("express");
const Categorie = require("../models/categorie.js");
const router = express.Router()




router.post('/', async (req, res) => {
    
    const { nomCategorie, imageCategorie } = req.body;
    try {
        const categorie = new Categorie({
            nomCategorie: nomCategorie,
            imageCategorie: imageCategorie
        })
        const result = await categorie.save();
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!! result: "+result)
        res.status(200).json(categorie)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


router.get('/', async (req, res) => {
    try {
        // Categorie is the model who connect to database with mongoose
        const cat = await Categorie.find() // point on database / 
        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        
        const cat = await Categorie.findById(id)
        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Categorie.findByIdAndDelete(id)
        res.status(200).json({"message":"Deleted Successfully"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


router.put("/:id", async (req, res)=>{
    
    try {
       const cat= await Categorie.findByIdAndUpdate({
            "_id": req.params.id,
        },
           { $set:
            req.body
            },
           {new: true},
        )


        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }


})





module.exports = router