const express = require('express');
const Product = require('../models/productschema');
const router = express.Router();


router.get('/', async (req, res) => {
  const { minPrice } = req.query;
  try {
    const products = await Product.find({ price: { $gt: minPrice } }).sort({ price: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send('Error retrieving products');
  }
  
});

module.exports = router;
