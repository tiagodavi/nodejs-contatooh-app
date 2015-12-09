var sanitize = require('mongo-sanitize')

module.exports = app => {
	var Model 		= app.models.contact
	var controller 	= {}
		
	controller.findAll = (req, res) => {
		Model.find()
		.populate('emergency')		
		.exec()
		.then(
			contacts => res.json(contacts),
			error => { 
				console.log(error)
				res.status(500).json(error)
			} 			
		)
	}	
	controller.findOne = (req, res) => {
		var _id = req.params.id
			
		Model.findById(_id).exec()
		.then(
			contact => {
				if (! contact) throw new Error("Contact not found");
				res.json(contact)
			},
			error => {
				console.log(error)
				res.status(404).json(error)
			}
		)		
	}
	controller.remove = (req, res) => {
		var _id = sanitize(req.params.id)

		Model.remove({"_id": _id}).exec()
		.then(
			() => res.end(),
			error => {
				console.log(error)
				res.status(500).json(error)
			}
		)		
	}
	controller.save = (req, res) =>  {

		var input = {
			"name": req.body.name,
			"email": req.body.email,
			"emergency": req.body.emergency || null
		}
			
		if(inputContact._id){
			Model.findByIdAndUpdate(inputContact._id, input)
			.exec()
			.then(
				contact => res.json(contact),
				error => {
					console.log(error)
					res.status(500).json(error)
				}
			)
		}
		else{
			Model.create(input)
			.then(
				contact => res.status(201).json(contact),
				error => {
					console.log(error)
					res.status(500).json(error)
				}
			)
		}	
	}

	return controller
}

