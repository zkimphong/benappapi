const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .route('/')
  .get(validate(productValidation.getProducts), productController.getProducts)
  .post(auth('admin'), validate(productValidation.createProduct), productController.createProduct);

router
  .route('/:productId')
  .get(validate(productValidation.getProduct), productController.getProduct)
  .patch(auth('admin'), validate(productValidation.updateProduct), productController.updateProduct)
  .delete(auth('admin'), validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
