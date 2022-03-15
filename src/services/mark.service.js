const Mark = require('../model/mark.model')

const createMarks = (obtain,subject, user)=>{
	const newMark = new Mark({
		obtain:obtain,
		subject:subject,
		user:user
	})
	return newMark
}

const getAllMarks = async(userId)=>{
	const mark = await Mark.find({user: userId}).populate('subject', 'name').populate('user', 'username')
	return mark
}

const deleteMarks = async(id)=>{
	const mark = await Mark.findByIdAndDelete(id)
	return mark
}	

module.exports = {
	createMarks,
	getAllMarks,
	deleteMarks
}