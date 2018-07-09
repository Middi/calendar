const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/item');

router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

router.post('/', (req, res) => {
    const newItem = new Item({
        event: req.body.event,
        start: req.body.start,
        end: req.body.end
    });

    newItem.save().then(item => res.json(item));
});

// router.delete('/:id', (req, res) => {
//    Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({succes: true})))
//     .catch(err => res.status(404).json({success: false}))
// });

module.exports = router;