const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateStart: {
        type: String,
        required: true
    },
    dateEnd: {
        type: String,
        required: true
    },
    timeStart: {
        type: String,
        required: true
    },
    timeEnd: {
        type: String,
        required: true
    },
    shiftType: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);