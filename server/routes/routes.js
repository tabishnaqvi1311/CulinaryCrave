const express = require('express')
const router = express.Router()

const { getAllRecipes, getRecipe, createRecipe, deleteRecipe, getRandom } = require('../controller/recipeRoutes')

router.route('/').get(getAllRecipes).post(createRecipe)
router.route('/:id').get(getRecipe).delete(deleteRecipe)
router.route('/random').get(getRandom)

module.exports = router