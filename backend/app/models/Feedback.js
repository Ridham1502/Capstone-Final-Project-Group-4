const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    movieId: {
        type: mongoose.ObjectId,
        ref: 'Movie',
        required: true
    },
    comment: { type: String },
    name: { type: String },
},
    { timestamps: true }
);

const Feedbackdetails = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedbackdetails;
