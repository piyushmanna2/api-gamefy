const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    cat_name: {
        type: String,
        required: true
    },
    cat_image: {
        type: String,
        required: true
    },
    cat_status: {
        type: Number,
        required: true
    },
    cat_createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Category', categorySchema);
