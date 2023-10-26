'use strict';

const mongoose = require('mongoose');

const { connectToDatabase } = require('../database/db');
const Product = require('../model/product');
const util = require('../util');

const getById = async id => {
	try {
		await connectToDatabase();
		return await Product.findById(id);
	} catch(err) {
		console.error(`Error getting product: ${err.message}`);
		throw err;
	}
};

const getAll = async params => {
	const {
		name,
		type,
		priceFrom,
		priceTo,
		isPromotion,
		orderBy,
		orderDirection
	} = params;

	const filter = {};

	if(name)
		filter.name = new RegExp(name, 'i');

	if(type && ['burger', 'condiments', 'snacks', 'drinks'].includes(type))
		filter.type = type;

	if(priceFrom)
		filter.price = { ...filter.price, $gte: +priceFrom };

	if(priceTo)
		filter.price = { ...filter.price, $lte: +priceTo };

	if(isPromotion === '1')
		filter.isPromotion = true;
	else if(isPromotion === '0')
		filter.isPromotion = false;

	const sort = {};

	const validOrderFields = ['name', 'price', 'type', 'discount'];
	if(orderBy && validOrderFields.includes(orderBy))
		sort[orderBy] = orderDirection === 'desc' ? -1 : 1;

	try {
		await connectToDatabase();
		return await Product.find(filter).sort(sort);
	} catch(err) {
		console.error(`Error getting product: ${err.message}`);
		throw err;
	}
};

const create = async productObj => {
	try {
		await connectToDatabase();

		productObj.ingredients = util.removeDuplicates(productObj.ingredients);
		return await Product.create(productObj);
	} catch(err) {
		console.error(`Error creating product: ${err.message}`);
		throw err;
	}
};

const update = async (id, productObj) => {

	if(!mongoose.Types.ObjectId.isValid(id))
		throw new Error('Invalid Id');

	try {
		await connectToDatabase();

		const productFound = await Product.findById(id);
		if(!productFound)
			return;

		if(productObj.ingredients)
			productObj.ingredients = util.removeDuplicates(productObj.ingredients);

		return await Product.findByIdAndUpdate(id, productObj, { new: true, runValidators: true });
	} catch(err) {
		console.error(`Error updating product: ${err.message}`);
		throw err;
	}
};

const deleteById = async id => {
	if(!mongoose.Types.ObjectId.isValid(id))
		throw new Error('Invalid Id');

	try {
		await connectToDatabase();
		return await Product.findByIdAndDelete(id);
	} catch(err) {
		console.error(`Error getting product: ${err.message}`);
		throw err;
	}
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	deleteById
};
