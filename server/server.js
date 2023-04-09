require('dotenv').config()
const cors = require('cors')

const recipes = require('./routes/routes')

const port = process.env.PORT || 8181;

const express = require('express')
const app = express();


const connectToDb = require('./db')
app.use(express.json());
app.use(cors())

app.use('/api/v1/recipes', recipes) 

const start = async () => {
    try {
        await connectToDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server running on http://localhost:${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()