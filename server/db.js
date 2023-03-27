const mongoose = require('mongoose');

const connectToDb = (url) => {
    return mongoose.connect(url,{
    }).then(()=> {
        console.log(`database is connected`);
    }).catch((err) => {
        console.log(err);
    })
};

module.exports = connectToDb
