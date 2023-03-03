const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017";

const connectToMongo = () => {
    mongoose.connect(mongo, { dbName: 'CulinaryCraze'}, (data, err) => {
        console.log(data);
        console.log(err);
        console.log("CONNECTED TO MONGO!");
    });
};

module.exports = connectToMongo;