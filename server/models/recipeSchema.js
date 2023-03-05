const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      ingredients: {
        type: Array,
        required: true
      },
      steps: {
        type: Array,
        required: true
      },
      timers: {
        type: Array,
        required: true
      },
      imageURL: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      mealType: {
        type: String,
        required: true
      }
}, {timestamps: true});

const Recipe =  mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;