
const express = require("express")
const Article = require("../models/produit.js")
const router = express.Router()






router.post("/", async (req, res) => {
    const art = new Article(req.body)

    try {
        await art.save()
        res.status(200).json(art)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


router.get('/', async (req, res) => {
    try {
        const articles = await Article.find()
        res.status(200).json(articles)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.get('/:id', async (req, res) => {

    const id = req.params.id;

    try {
        const art = await Article.findById(id)
        res.status(200).json(art)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Article.findByIdAndDelete(id)
        res.status(200).json({message:"Article Deleted Successfully"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


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