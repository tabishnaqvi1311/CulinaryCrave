const express = require('express');
const app = express();
const port = 8181;
const cors = require('cors');
const connectToMongo = require('./db');
const User = require('./models/User');
const Recipe = require('./models/recipeSchema');


app.use(express.json())
app.use(cors());


app.get('/', (req,res) => {
    res.send('hello');
});

app.post('/submit',(req,res)=>{
    console.log(`Form Submitted!!!`);
});

app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});