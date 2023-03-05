const express = require('express');
const app = express();
const port = 8181;
const cors = require('cors');
const connectToMongo = require('./db');
const User = require('./models/User');
const Recipe = require('./models/recipeSchema');


connectToMongo();

app.use(express.json())
app.use(cors());


app.get('/', (req,res) => {
    res.send('hello');
});

app.post('/submit', async(req,res) => {
    console.log(req.body);


    try {
        const { userName, userEmail, recipeName, ingreds } = req.body;

        const newRecipe = await Recipe.create({
            name: userName,
            ingredients: ingreds,
            email: userEmail,
            recipeName: recipeName
        });
    
        res.status(200).json(newRecipe);
        console.log(`Form Submitted!!!`); 
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});