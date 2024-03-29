

const CategorieModel = require("../models/categorie.js")



const createCategory =async (req, res) => {
    
    const { nomCategorie, imageCategorie } = req.body;
    try {
        const categorie = new CategorieModel({
            nomCategorie: nomCategorie,
            imageCategorie: imageCategorie
        })
        const result = await categorie.save();
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!! result: "+result)
        res.status(200).json(categorie)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const getAllCategories = async (req, res) => {
    try {
        // Categorie is the model who connect to database with mongoose
        const cat = await CategorieModel.find() // point on database / 
        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const getCategoryById = async (req, res) => {
    const id = req.params.id;
    try {
        
        const cat = await CategorieModel.findById(id)
        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const deleteCategory = async (req, res) => {
    const id = req.params.id
    try {
        await CategorieModel.findByIdAndDelete(id)
        res.status(200).json({"message":"Deleted Successfully"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const updateCategory = async (req, res)=>{
    
    try {
       const cat= await CategorieModel.findByIdAndUpdate({
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


}

module.exports = {createCategory, getAllCategories, getCategoryById,deleteCategory,updateCategory}   