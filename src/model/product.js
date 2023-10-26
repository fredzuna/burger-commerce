'use strict';

const mongoose = require('mongoose');

const TypeProductEnum = ['burger', 'condiments', 'snacks', 'drinks'];
const StatusProductEnum = ['active', 'inactive'];

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required']
	},
	type: {
		type: String,
		required: true,
		enum: Object.values(TypeProductEnum)
	},
	price: {
		type: Number,
		required: true,
		min: [0, 'Enter a valid price'],
		get: v => (v / 100).toFixed(2),
		set: v => v * 100
	},
	image: {
		type: String,
		default: 'https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg'
	},
	isPromotion: {
		type: Boolean,
		default: false
	},
	discount: {
		type: Number,
		min: [0],
		max: [100],
		validate: {
			validator(value) {
				return !(!this.get('isPromotion') && !!value);
			},
			message: 'Since isPromotion value is false we should not provide discount value.'
		}
	},
	ingredients: {
		type: [String],
		required: true,
		validate: [
			{
				validator(v) {
					return v.length > 0;
				},
				message: 'Enter at least one ingredient'
			},
			{
				validator(v) {
					const items = [...new Set(v)];
					return items.length === v.length;
				},
				message: 'Ingredients cannot be duplicated.'
			}
		]
	},
	status: {
		type: String,
		enum: Object.values(StatusProductEnum),
		default: StatusProductEnum[0]
	}

}, {
	timestamps: { createdAt: 'dateCreated', updatedAt: 'dateModified' }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
