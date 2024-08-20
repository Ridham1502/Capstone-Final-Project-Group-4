const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketBookingSchema = new Schema({
    movieId: {
        type: mongoose.ObjectId,
        ref: 'Movie',
        required: true
    },
    userId: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    },
    name: { type: String, required: true },
    email: { type: String },
    date: { type: String },
    time: { type: String, required: true },
    adultCount: { type: String },
    childCount: { type: String },
    phoneNumber: { type: String },
    addonfood: [{ type: mongoose.ObjectId, ref: 'food' }],
    totalamount: {type: String}
});

const ticketBooking = mongoose.model('ticketBooking', ticketBookingSchema);

module.exports = ticketBooking;
