var bookModel = require('./../models/bookModel');

exports.save_book = function (req, res){
    bookModel.create({
        name: "first Book",
        email: "ddas@gmail.com",
        date: "2019/07/29",
        time: "02:00:02",
        id_service: 1
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(500).send(err))
}

