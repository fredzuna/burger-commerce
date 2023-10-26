'use strict';

const dataService = require('../../service/productService');
const { handler } = require('../delete');

const context = {
	callbackWaitsForEmptyEventLoop: false
};

const mockData = {
	_id: '4001',
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
		id: '4001'
	}
};

describe('lambdaService', () => {
	beforeEach(() => {
		jest.restoreAllMocks();
	});
	test('should return delete response on success', async () => {
		const retrieveDataSpy = jest.spyOn(dataService, 'deleteById').mockResolvedValueOnce(mockData);
		const response = await handler(mEvent, context);
		const body = JSON.parse(response.body);

		expect(body._id).toEqual(mockData._id);
		expect(200).toEqual(response.statusCode);
		expect(retrieveDataSpy).toBeCalledWith(mEvent.pathParameters.id);
	});

	test('should return delete response on failure internall error', async () => {
		const mResponse = { code: 500, message: 'Internal server error' };

		const retrieveDataSpy = jest.spyOn(dataService, 'deleteById').mockRejectedValueOnce(new Error(mResponse.message));
		const response = await handler(mEvent, context);

		expect(response).toEqual({ statusCode: 500, body: JSON.stringify({ error: mResponse.message }) });
		expect(retrieveDataSpy).toBeCalledWith(mEvent.pathParameters.id);
	});
});
