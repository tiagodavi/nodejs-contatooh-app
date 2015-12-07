module.exports = app => {

	app.get('/', (req, res) => {
		res.render('index', {'userName': req.user.name})
	})
}