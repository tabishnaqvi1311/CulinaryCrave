const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    maxLength: [20, 'name cannot be longer than 20 chars']
  },
  mealType: {
    type: String,
  },
  ingredients: {
    type: Array,
    required: [true, 'must provide ingredients']
  },
  time: {
    type: Number,
    default: 1
  },
  steps: {
    type: Array,
    required: true
  },
})

module.exports = mongoose.model('Recipes', recipeSchema);