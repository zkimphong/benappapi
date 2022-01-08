const httpStatus = require('http-status');
const { Supplier } = require('../models');
const ApiError = require('../utils/ApiError');

const createSupplier = async (supplierBody) => {
  return Supplier.create(supplierBody);
};

const querySuppliers = async (filter, options) => {
  const suppliers = await Supplier.paginate(filter, options);
  return suppliers;
};

const getSupplierById = (id) => {
  return Supplier.findById(id);
};

const updateSupplierById = async (supplierId, updateBody) => {
  const supplier = await getSupplierById(supplierId);
  if (!supplier) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Supplier not found');
  }
  Object.assign(supplier, updateBody);
  await supplier.save();
  return supplier;
};

const deleteSupplierById = async (supplierId) => {
  const supplier = await getSupplierById(supplierId);
  if (!supplier) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Supplier not found');
  }
  await supplier.remove();
  return supplier;
};

module.exports = {
  createSupplier,
  querySuppliers,
  getSupplierById,
  updateSupplierById,
  deleteSupplierById,
};
