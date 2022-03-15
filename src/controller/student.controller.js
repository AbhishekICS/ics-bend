const { getAllMarks } = require('../services/mark.service')
const services = require('../services/student.service')

const getAllStudents = async(req, res) =>{
	try {
		const student = await services.studentServices()
		res.status(200).json(student)
	} catch (error) {
		res.status(500).json(error)
	}
}


const getOneStudent = async(req, res) =>{
	try {
		const id = req.params.id
		const oneStudent = await services.getOneStudents(id)
		const marks = await getAllMarks(id)
		
		res.status(200).json({oneStudent, marks})
	} catch (error) {
		res.status(500).json(error)
	}
}
module.exports = {
	getAllStudents,
	getOneStudent
}