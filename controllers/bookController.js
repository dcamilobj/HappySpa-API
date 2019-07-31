var bookModel = require('./../models/bookModel');

exports.save_book = function (req, res){
    bookModel.create({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        id_service: req.body.service_selected
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(500).send(err))
}

