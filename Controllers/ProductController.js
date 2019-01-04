const Product = require('../models/Product')
const express = require('express')
const router = express.Router()

router.get('/all', (req, res) => {
  Product.find({}, function(err, products) {
    if (err) {
      res.status(500).send({
        success: false,
        message: err
      })
    } else {
      res.status(200).send({
        success: true,
        message: products
      })
    }
  })
})

router.post('/add', (req, res) => {
  Product.create(
    {
      name: req.body.name,
      price: req.body.price,
      image: req.body.image
    },
    function(error, product) {
      if (error) {
        res.status(500).send({
          success: false,
          messsage: error
        })
      } else {
        res.status(200).send({
          success: true,
          message: product
        })
      }
    }
  )
})

router.delete('/delete/:id', (req, res) => {
  console.log(req.params.id)
  Product.findOneAndDelete({ _id: req.params.id }, function(error, product) {
    if (error) {
      res.status(500).send({
        success: false,
        message: error
      })
    } else {
      res.status(200).send({
        success: true,
        message: product
      })
    }
  })
})

module.exports = router
