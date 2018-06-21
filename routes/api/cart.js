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

    Cart.create({
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new item into cart"
        })
    })
})

route.post('/edit_quantity',(req,res) => {
  Cart.find({
     where: { name: req.body.name }
   }).on('success', function (item) {

    if (item) {
      item.updateAttributes({
        quantity: quantity + 1
      })
    }
  })
})

exports = module.exports = route
