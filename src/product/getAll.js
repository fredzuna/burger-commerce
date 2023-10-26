'use strict';

const productService = require('../service/productService');

module.exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const { queryStringParameters } = event;
		const response = await productService.getAll(queryStringParameters || {});
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
