const { createSubjects, getAllSubject, deleteSubject } = require("../services/subject.service")

const newSubject = async (req, res) =>{
	try {
		const newSubject = await createSubjects(req.body.name)
		
		const saveNewSubject = await newSubject.save()
		res.status(200).json(saveNewSubject);
	} catch (error) {
		res.status(500).json(error);
	}
}


const getAllSubjects = async(req, res)=>{
	try {
		const subjects = await getAllSubject()
		res.status(200).json(subjects)
	} catch (error) {
		res.status(500).json(error)		
	}
}

const deleteSubjects = async (req, res)=>{
	try {
		const id = req.params.id
		const subject = await deleteSubject(id)
		res.status(200).json({message:"Subject is deleted successfully..", subject})

	} catch (error) {
		res.status(500).json(error)
	}
}

module.exports = {
	newSubject,
	getAllSubjects,
	deleteSubjects
}