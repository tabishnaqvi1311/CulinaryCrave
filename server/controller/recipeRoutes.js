const Recipes = require('../models/recipeSchema')

const getAllRecipes = async(req,res) => {
    try {
        const recipes = await Recipes.find({}).limit(3)
        res.status(200).json({ recipes }) 
    } catch (error) {
        console.log(error);
    }
}

const createRecipe = async(req,res) => {
    try {
        const recipes = await Recipes.create(req.body)
        res.status(201).json({ recipes }) 
    } catch (error) {
        console.log(error);
    }    
}

const getRecipe = async(req,res) => {
    try {
        const {id:recipeId} = req.params
        const recipe = await Recipes.findOne({ _id: recipeId })
        if(!recipe){
            return res.status(404).json({msg : 'Recipe Not Found'})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteRecipe = async(req,res) => {
    try {
        const {id:recipeId} = req.params
        const recipe = await Recipes.findOneAndDelete({_id: recipeId})
        if(!recipe){
            return res.status(404).json({msg: 'Recipe Not Found'})
        }
    } catch (error) {
        console.log({msg: error});
    }
}

module.exports = { getAllRecipes, getRecipe, createRecipe, deleteRecipe }