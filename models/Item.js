const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const ItemSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);