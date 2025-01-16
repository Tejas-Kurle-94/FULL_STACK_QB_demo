const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: [true, 'Please provide a topic']
    },
    question: {
        type: String,
        required: [true, 'Please provide a question']
    },
    answer: {
        type: String,
        required: [true, 'Please provide an answer']
    }
});

module.exports = mongoose.model('QuestionPost', postSchema);