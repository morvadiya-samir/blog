const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Blog = new Schema({
    title: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.models.Blog ?? mongoose.model('Blog', Blog);
