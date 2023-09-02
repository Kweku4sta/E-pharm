const Product = require("../models/productModel");

const getProducts = async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json({
        message: 'Fetched products successfully.',
        products: products
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'An error occurred while fetching products.'
      });
    }
  };

module.exports = {
    getProducts
}