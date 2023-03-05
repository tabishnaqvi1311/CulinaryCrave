const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017";

const connectToMongo = () => {
    mongoose.connect(uri, { useNewUrlParser: true })
        .then(() => console.log('Database connected'))
        .catch((err) => console.error('Error connecting to database:', err));
};

module.exports = connectToMongo;