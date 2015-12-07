var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate')

module.exports = () => {

	var schema = mongoose.Schema({
		login: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		name: {
			type: String,
			required: true			
		},
		created_at: {
			type: Date,
			default: Date.now
		}
	})

	schema.plugin(findOrCreate)
	return mongoose.model('User', schema);
}