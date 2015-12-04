module.exports = app => {
	var Model 		= app.models.contact
	var controller 	= {}
		
	controller.findAll = (req, res) => {
		Model.find().exec()
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
		var _id = req.params.id

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
		var inputContact = req.body

		if(inputContact._id){
			Model.findByIdAndUpdate(inputContact._id, inputContact)
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
			Model.create(inputContact)
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

