
const User = require('../model/user.model')
const bcrypt = require('bcrypt')

exports.registerService = async (password, email, username) =>{
	
	const salt = await bcrypt.genSalt(10)
	const hashPass = await bcrypt.hash(password, salt)
	const newUser = new User({
		username: username,
		email: email,
		password: hashPass
	})
	return newUser
}

exports.loginService = async (email, password) =>{
	const user = await User.findOne({email: email})
	!user && res.status(400).json("Wrong")

	const validatePass = await bcrypt.compare(password, user.password)
	!validatePass && res.status(400).json('Wrong Password')

	return user

}