'use strict';

const dataService = require('../../service/productService');
const { handler } = require('../create');

const context = {
	callbackWaitsForEmptyEventLoop: false
};

const mockData = {
	_id: '100',
	name: 'product1',
	type: 'burger',
	price: 7,
	ingredients: ['sugar', 'milk'],
	isPromotion: true,
	discount: 10
};

describe('lambdaService', () => {
	beforeEach(() => {
		jest.restoreAllMocks();
	});
	test('should return create response on success', async () => {
		const retrieveDataSpy = jest.spyOn(dataService, 'create').mockResolvedValueOnce(mockData);

		const mEvent = { body: JSON.stringify(mockData) };
		const response = await handler(mEvent, context);
		const body = JSON.parse(response.body);

		expect(body.id).toEqual(mockData._id);
		expect(201).toEqual(response.statusCode);
		expect(retrieveDataSpy).toBeCalledWith(JSON.parse(mEvent.body));
	});

	test('should return create response on failure', async () => {
		const mResponse = { code: 500, message: 'Internal server error' };

		const mEvent = { body: JSON.stringify(mockData) };
		const retrieveDataSpy = jest.spyOn(dataService, 'create').mockRejectedValueOnce(new Error(mResponse.message));
		const response = await handler(mEvent, context);

		expect(response).toEqual({ statusCode: 500, body: JSON.stringify({ error: mResponse.message }) });
		expect(retrieveDataSpy).toBeCalledWith(JSON.parse(mEvent.body));
	});
});
