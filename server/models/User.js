const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});
// console.log('user',UserSchema);

const User = mongoose.model('User', UserSchema)

module.exports = User;