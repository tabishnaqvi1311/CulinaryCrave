const Recipes = require('../models/recipeSchema')

const getAllRecipes = async(req,res) => {
    try {
        const recipes = await Recipes.find({}).limit(3)
        res.status(200).json({ recipes }) 
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getRandom = async(req, res) => {
    try {
        const recipes = await Recipes.aggregate([{ $sample: {size: 3} }]);
        res.status(200).json({ recipes })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createRecipe = async(req,res) => {
    try {
        const recipes = await Recipes.create(req.body)
        res.status(201).json({ recipes }) 
    } catch (error) {
        res.status(500).json({msg: error})
    }    
}

const getRecipe = async(req,res) => {

    try {
        const {id:recipeId} = req.params
        console.log(req.params);
        const recipe = await Recipes.findOne({ _id: recipeId })
        if(!recipe){
            return res.status(404).json({msg : 'Recipe Not Found'})
        }
        res.status(200).json({ recipe })
    } catch (error) {
        res.status(500).json({msg: error})
        console.log(error)
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

const searchRecipe = async(req,res) => {
    const quer = req.query.q;
    console.log(quer);
    const regex = new RegExp(quer, 'i');

    try{
        const result = await Recipes.find({ name: quer })
        res.json(result);
    } 
    catch(err){
        res.status(500).json({msg: err})
    }
}

module.exports = { getAllRecipes, getRecipe, createRecipe, deleteRecipe, getRandom, searchRecipe }