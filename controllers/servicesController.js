/*/const conn = require('../database/connection');*/
var serviceModel = require('./../models/serviceModel');

exports.services_all_get = function (req, res){
    serviceModel.findAll({
        attributes: ['id','name','image','happy','cost','description']
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(500).send(err))
}

/*exports.service_detail_get = function(req, res){
  serviceModel.findAll({
      attributes: ['id','name','image','happy'],
      where: {
          id: req.params.id
      }
  })
  .then(data => {
    res.json(data);
})
.catch(err => res.status(500).send(err))
}*/

exports.service_detail_get = function(req, res){
     let id = Number(req.params.id)
     serviceModel.findByPk(id, {
        attributes: ['id','name','image','happy','cost','description']
     })
     .then(data =>  res.json(data))
     .catch(err => {res.status(500).send('Error query')})
  }

