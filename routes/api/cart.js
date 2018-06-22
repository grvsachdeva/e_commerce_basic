const Cart = require('../../db').Cart
const route = require('express').Router()

route.get('/', (req, res) => {

    Cart.findAll()
        .then((items) => {
            res.status(200).send(items)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive cart items"
            })
        })

})

route.post('/', (req, res) => {

   Cart.find({
      where: { name: req.body.name }
    }).then(function (item) {
     if (item) {
       item.updateAttributes({
         quantity: item.quantity + 1
       }).then((item) => {
          console.log("item updated");
           res.status(201).send(item)
       }).catch((err) => {
           res.status(501).send({
           error: "Could not add new item into cart"
           })
       })
     }else{
       Cart.create({
           name: req.body.name,
           price: req.body.price,
           quantity: 1
       }).then((item) => {
          console.log("item created");
           res.status(201).send(item)
       }).catch((err) => {

           res.status(501).send({
           error: "Could not add new item into cart"
           })
       })
     }

   })

})

exports = module.exports = route
