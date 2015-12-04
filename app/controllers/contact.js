module.exports = function(app) {
	var model 		= app.models.contact;
	var controller 	= {};
	var contacts 	= {};
	var contact_ID 	= 5;
	
	var insert	= function(contact){
		contact._id = ++contact_ID;
		contacts.push(contact);
		return contact;
	};
	var update = function(contact){
		contacts = contacts.map(function(_contact){
			if(_contact._id == contact._id){
				_contact = contact;
			}
			return _contact;
		});
		return contact;		
	};

	controller.findAll = function(req, res){
		res.json(contacts);
	};
	controller.findOne = function(req, res){
		var contactId = req.params.id;
		var contact = contacts.filter(function(contact){			
			return contact._id == contactId;
		});
		contact[0] ? res.json(contact[0]) : res.status(404).send('contact not found');		
	};
	controller.remove = function(req, res){
		var contactId = req.params.id;
		contacts = contacts.filter(function(contact){			
			return contact._id != contactId;
		});
		res.send(204).end();
	};
	controller.save = function(req, res) {
		var contact = req.body;		
		contact = contact._id ?
			insert(contact) :
			update(contact);
		res.json(contact);
	};

	return controller;
};

