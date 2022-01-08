const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const supplierValidation = require('../../validations/supplier.validation');
const supplierController = require('../../controllers/supplier.controller');

const router = express.Router();

router
  .route('/')
  .get(validate(supplierValidation.getSuppliers), supplierController.getSuppliers)
  .post(auth('admin'), validate(supplierValidation.createSupplier), supplierController.createSupplier);

router
  .route('/:supplierId')
  .get(validate(supplierValidation.getSupplier), supplierController.getSupplier)
  .patch(auth('admin'), validate(supplierValidation.updateSupplier), supplierController.updateSupplier)
  .delete(auth('admin'), validate(supplierValidation.deleteSupplier), supplierController.deleteSupplier);

module.exports = router;
