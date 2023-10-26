'use strict';

const productService = require('../service/productService');

module.exports.handler = async (event, context) => {

	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const productObj = JSON.parse(event.body);
		const { _id } = await productService.create(productObj);
		return {
			statusCode: 201,
			body: JSON.stringify({ id: _id })
		};
	} catch(err) {
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({ error: err.message })
		};
	}
};
