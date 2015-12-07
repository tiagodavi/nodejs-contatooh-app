var passport = require('passport')
var GitHubStrategy = require('passport-github').Strategy
var mongoose = require('mongoose')

module.exports = () => {

	var User = mongoose.model('User')

	passport.use(
		new GitHubStrategy(
			{
				clientID: '',
				clientSecret: '',
				callbackURL: 'http://localhost:3000/auth/github/callback'
			},
			(accessToken, refreshToken, profile, done) => {
				User.findOrCreate(
					{'login': profile.username},
					{'name':  profile.username},
					(error, user) => {
						if(error){
							console.log(error)
							return done(error)
						}
						return done(null, user)
					}
				)
			}
		)
	)

	passport.serializeUser((user, done) => {
		done(null, user._id)
	})

	passport.deserializeUser((id, done) => {
		User.findById(id).exec()
		.then((user) => {
			done(null, user)
		})
	})
}