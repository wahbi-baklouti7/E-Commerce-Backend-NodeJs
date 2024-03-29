
const express = require("express")
const Article = require("../models/produit.js")
const articleController= require("../controllers/articleController.js")
const router = express.Router()






router.post("/", articleController.createArticle)


router.get('/', articleController.getAllArticles)

router.get('/:id',articleController.getArticleById )

router.delete('/:id',articleController.deleteArticle )


router.get('/pagination', async (res, req) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;


    const offset = (page - 1) * limit;

    try {

        const articles = await Article.find().skip(offset).limit(limit)
        
    } catch (error) {
        
    }


})









module.exports = router