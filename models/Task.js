const { Schema, model } = require(mongoose);

const taskSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	createdOn: {
		type: Date,
		required: true,
	},
	author: {
		type: String,
		required: true
	},
	priority: Number,
	category: String
});

export const Task = model('Task', taskSchema)