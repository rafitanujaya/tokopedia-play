const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    urlImage: {
        required: true,
        type: String
    },
    thumbnail: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Video', VideoSchema);