'use strict';

const dataService = require('../../service/productService');
const { handler } = require('../update');

const context = {
	callbackWaitsForEmptyEventLoop: false
};

const mockData = {
	_id: '3001',
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
		id: '3001'
	}
};

describe('lambdaService', () => {
	beforeEach(() => {
		jest.restoreAllMocks();
	});
	test('should return update response on success', async () => {
		const retrieveDataSpy = jest.spyOn(dataService, 'update').mockResolvedValueOnce(mockData);

		const response = await handler(mEvent, context);
		const body = JSON.parse(response.body);

		expect(body.id).toEqual(mockData._id);
		expect(201).toEqual(response.statusCode);
		expect(retrieveDataSpy).toBeCalledWith(mEvent.pathParameters.id, JSON.parse(mEvent.body));
	});

	test('should return update response on success', async () => {
		const errorResponse = {
			statusCode: 404,
			message: 'Not Found'
		};

		const retrieveDataSpy = jest.spyOn(dataService, 'update').mockResolvedValueOnce();

		const response = await handler(mEvent, context);
		const body = JSON.parse(response.body);

		expect(body.message).toEqual(errorResponse.message);
		expect(errorResponse.statusCode).toEqual(response.statusCode);
		expect(retrieveDataSpy).toBeCalledWith(mEvent.pathParameters.id, JSON.parse(mEvent.body));
	});

	test('should return update response on failure internall error', async () => {
		const mResponse = { code: 500, message: 'Internal server error' };

		const retrieveDataSpy = jest.spyOn(dataService, 'update').mockRejectedValueOnce(new Error(mResponse.message));
		const response = await handler(mEvent, context);

		expect(response).toEqual({ statusCode: 500, body: JSON.stringify({ error: mResponse.message }) });
		expect(retrieveDataSpy).toBeCalledWith(mEvent.pathParameters.id, JSON.parse(mEvent.body));
	});
});
