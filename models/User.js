const { model, Schema} = require('mongoose')

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
		default: Date.now
	}
})

module.exports = model('User', UserSchema)