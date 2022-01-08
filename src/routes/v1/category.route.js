const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router
  .route('/')
  .get(validate(categoryValidation.getCategories), categoryController.getCategories)
  .post(auth('admin'), validate(categoryValidation.createCategory), categoryController.createCategory);

router
  .route('/:categoryId')
  .get(auth('admin'), validate(categoryValidation.getCategory), categoryController.getCategory)
  .patch(auth('admin'), validate(categoryValidation.updateCategory), categoryController.updateCategory)
  .delete(auth('admin'), validate(categoryValidation.deleteCategory), categoryController.deleteCategory);

module.exports = router;
