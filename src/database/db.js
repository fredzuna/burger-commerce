'use strict';

const mongoose = require('mongoose');

let conn = null;

exports.connectToDatabase = async () => {
	if(conn == null) {
		console.log('Creating new connection to the database....');
		conn = await mongoose.connect(process.env.MONGO_URI, {
			serverSelectionTimeoutMS: 5000
		});
		return conn;
	}
	console.log(
		'Connection already established, reusing the existing connection'
	);
};
