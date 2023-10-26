'use strict';

const dataService = require('../../service/productService');
const { handler } = require('../getById');

const context = {
	callbackWaitsForEmptyEventLoop: false
};

const mockData = {
	_id: '5001',
	name: 'product2 updated',
	type: 'burger',
	price: 7,
	ingredients: ['sugar', 'milk'],
	isPromotion: true,
	discount: 15
};

const mEvent = {
	body: JSON.stringify(mockData),
	pathParameters: {
		id: '5001'
	}
};

describe('lambdaService', () => {
	beforeEach(() => {
		jest.restoreAllMocks();
	});
	test('should return delete response on success', async () => {
		const retrieveDataSpy = jest.spyOn(dataService, 'getById').mockResolvedValueOnce(mockData);
		const response = await handler(mEvent, context);
		const body = JSON.parse(response.body);

		expect(body).toEqual(mockData);
		expect(200).toEqual(response.statusCode);
		expect(retrieveDataSpy).toBeCalledWith(mEvent.pathParameters.id);
	});

	test('should return delete response on failure internall error', async () => {
		const mResponse = { code: 500, message: 'Internal server error' };

		const retrieveDataSpy = jest.spyOn(dataService, 'getById').mockRejectedValueOnce(new Error(mResponse.message));
		const response = await handler(mEvent, context);

		expect(response).toEqual({ statusCode: 500, body: JSON.stringify({ error: mResponse.message }) });
		expect(retrieveDataSpy).toBeCalledWith(mEvent.pathParameters.id);
	});
});
