const express = require('express')
const router = express.Router()

const { getAllRecipes, getRecipe, createRecipe, deleteRecipe, getRandom } = require('../controller/recipeRoutes')

router.route('/').get(getAllRecipes).post(createRecipe)
router.route('/:random').get(getRandom)
router.route('/:id').get(getRecipe).delete(deleteRecipe)

module.exports = router