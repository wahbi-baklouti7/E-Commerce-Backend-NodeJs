const express = require("express");
const router = express.Router();
const CategorieController = require("../controllers/categoryController.js");

router
  .route("/")
  .get(CategorieController.getAllCategories)
  .post(CategorieController.createCategory);

router
  .route("/:id")
  .get(CategorieController.getCategoryById)
  .delete(CategorieController.deleteCategory)
  .put(CategorieController.updateCategory);




module.exports = router;
