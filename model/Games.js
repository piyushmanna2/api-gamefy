const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    game_name: {
        type: String,
        required: true
    },
    game_icon: {
        type: String,
        required: true
    },
    game_url: {
        type: String,
        required: true
    },
    game_catid: {
        type: String,
        required: true
    },
    game_rating: {
        type: Number,
        required: true
    },
    game_featured: {
        type: Number,
        required: true
    },
    game_status: {
        type: Number,
        required: true
    },
    game_createdat: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Game', gameSchema);
