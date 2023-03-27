const express = require('express')
const router = express.Router()

const { getAllRecipes, getRecipe, createRecipe, deleteRecipe } = require('../controller/recipeRoutes')

router.route('/').get(getAllRecipes).post(createRecipe)
router.route('/:id').get(getRecipe).delete(deleteRecipe)

module.exports = router