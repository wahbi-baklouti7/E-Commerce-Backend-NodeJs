

const Article = require("../models/produit.js")



const getAllArticles= async (req, res) => {
    try {
        const articles = await Article.find()
        res.status(200).json(articles)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const createArticle = async (req, res) => {
    const art = new Article(req.body)

    try {
        await art.save()
        res.status(200).json(art)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const getArticleById = async (req, res) => {

    const id = req.params.id;

    try {
        const art = await Article.findById(id)
        res.status(200).json(art)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const deleteArticle = async (req, res) => {
    const id = req.params.id;
    try {
        await Article.findByIdAndDelete(id)
        res.status(200).json({message:"Article Deleted Successfully"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


module.exports = {getAllArticles,createArticle,getArticleById,deleteArticle}