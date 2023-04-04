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
  timers: {
    type: Array,
  },
  steps: {
    type: Array,
    required: true
  },
  // imageURL: {
  //   type: String,
  // },
  // originalURL: {
  //   type: String
  // }
})

module.exports = mongoose.model('Recipes', recipeSchema);