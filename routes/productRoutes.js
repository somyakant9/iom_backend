const express = require('express');
const Product = require('../Models/Products');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ message: 'Products retrieved successfully', products });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving products', error });
    }
  });
  

module.exports = router;