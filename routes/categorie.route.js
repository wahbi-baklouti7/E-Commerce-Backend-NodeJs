const express = require("express");
const router = express.Router()
const CategorieController = require("../controllers/categoryController.js")



router.route('/').get(CategorieController.getAllCategories).post(CategorieController.createCategory)

// router.post('/', CategorieController.createCategorie)


// router.get('/',CategorieController.getAllCategories)


router.get('/:id', CategorieController.getCategoryById)


router.delete('/:id', CategorieController.deleteCategory )


router.put("/:id",CategorieController.updateCategory )





module.exports = router