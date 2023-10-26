'use strict';

const productService = require('../service/productService');

module.exports.handler = async (event, context) => {

	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const { id } = event.pathParameters;
		const response = await productService.getById(id);

		return {
			statusCode: 200,
			body: JSON.stringify(response)
		};
	} catch(err) {
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({ error: err.message })
		};
	}

};
