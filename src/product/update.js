'use strict';

const productService = require('../service/productService');

module.exports.handler = async (event, context) => {

	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const { id } = event.pathParameters;
		const productObj = JSON.parse(event.body);
		const response = await productService.update(id, productObj);
		if(!response) {
			return {
				statusCode: 404,
				body: JSON.stringify({ message: 'Not Found' })
			};
		}

		const { _id } = response;
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
