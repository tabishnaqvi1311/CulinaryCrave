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
      email: {
        type: String,
        required: true
      },
      recipeName: {
        type: String,
        required: true
      }
}, {timestamps: true});

const Recipe =  mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;