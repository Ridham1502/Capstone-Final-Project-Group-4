const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Movie Schema
const movieSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    originalTitle: { type: String },
    cast: [{ type: String, required: true }],
    director: { type: String, required: true },
    writers: [{ type: String }],
    producers: [{ type: String }],
    productionCompany: {
        type: String
    },
    distributors: [{ type: String }],
    genre: [{ type: String, required: true }],
    language: { type: String, required: true },
    country: { type: String },
    releaseDate: { type: Date, required: true },
    runtime: { type: Number },
    rating: { type: Number },
    plot: { type: String },
    budget: { type: Number },
    boxOffice: { type: Number },
    awards: [{ type: String }],
    trailerLink: { type: String },
    website: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    events: [{
        eventName: { type: String },
        eventDate: { type: Date },
        eventLocation: { type: String },
        eventDescription: { type: String }
        }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
