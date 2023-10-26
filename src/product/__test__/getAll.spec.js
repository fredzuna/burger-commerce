'use strict';

const dataService = require('../../service/productService');
const { handler } = require('../getAll');

const context = {
	callbackWaitsForEmptyEventLoop: false
};

const mockData = [
	{
		_id: '6001',
		name: 'product1',
		type: 'burger',
		price: 7,
		ingredients: ['sugar', 'milk'],
		isPromotion: true,
		discount: 15
	},
	{
		_id: '6002',
		name: 'product2',
		type: 'condiments',
		price: 7,
		ingredients: ['banana', 'eggs'],
		isPromotion: true,
		discount: 35
	}
];

const mEvent = {
	queryStringParameters: {
		type: 'condiments'
	}
};

describe('lambdaService', () => {
	beforeEach(() => {
		jest.restoreAllMocks();
	});
	test('should return getAll response on success', async () => {
		const retrieveDataSpy = jest.spyOn(dataService, 'getAll').mockResolvedValueOnce(mockData);
		const response = await handler(mEvent, context);
		const body = JSON.parse(response.body);

		expect(body).toEqual(mockData);
		expect(200).toEqual(response.statusCode);
		expect(retrieveDataSpy).toBeCalledWith(mEvent.queryStringParameters);
	});

	test('should return getAll response on failure internall error', async () => {
		const mResponse = { code: 500, message: 'Internal server error' };

		const retrieveDataSpy = jest.spyOn(dataService, 'getAll').mockRejectedValueOnce(new Error(mResponse.message));
		const response = await handler(mEvent, context);

		expect(response).toEqual({ statusCode: 500, body: JSON.stringify({ error: mResponse.message }) });
		expect(retrieveDataSpy).toBeCalledWith(mEvent.queryStringParameters);
	});
});
