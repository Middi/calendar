const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/item');

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        shiftType: req.body.shiftType,
    });

    newItem.save().then(item => res.json(item));
});

// router.delete('/:id', (req, res) => {
//    Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({succes: true})))
//     .catch(err => res.status(404).json({success: false}))
// });

module.exports = router;