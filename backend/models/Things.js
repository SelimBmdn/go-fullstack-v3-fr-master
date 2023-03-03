const mongoose = require('mongoose');

const thingShema = mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    imageURL: { type: String, required: true},
    userID: { type: String, required: true},
    price: { type: Number, required: true},

});

module.exports = mongoose.model('Thing' , thingShema);
