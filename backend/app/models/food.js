const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: { type: String, required: true },
    details: { type: String },
    price: { type: String },
    quantity: { type: String, required: true },
    kcal: { type: String },
    type: { type: String },
    image: { type: String },
});

const fooddetails = mongoose.model('food', foodSchema);

module.exports = fooddetails;
