const express = require('express')
const router = express.Router()

const { getAllRecipes, getRecipe, createRecipe, deleteRecipe, getRandom, searchRecipe } = require('../controller/recipeController')

router.route('/').get(getAllRecipes).post(createRecipe)
router.route('/random').get(getRandom)
router.route('/search').get(searchRecipe)
router.route('/:id').get(getRecipe).delete(deleteRecipe)


module.exports = router