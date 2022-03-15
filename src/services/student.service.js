const Mark = require('../model/mark.model')
const Student = require('../model/user.model')


const studentServices = async () =>{
	const student = await Student.find()
	return student

}

const getOneStudents = async(id)=>{
	const oneStudent = await Student.findById(id)
	return oneStudent
}

module.exports = {
	studentServices,
	getOneStudents
}