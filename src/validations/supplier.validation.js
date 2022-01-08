const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSupplier = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  }),
};

const getSuppliers = {
  query: Joi.object().keys({
    name: Joi.string(),
    phone: Joi.string(),
    populate: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.string().custom(objectId),
  }),
};

const updateSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      phone: Joi.string(),
      address: Joi.string(),
      description: Joi.string(),
    })
    .min(1),
};

const deleteSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};
