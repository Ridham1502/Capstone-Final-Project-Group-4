const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
