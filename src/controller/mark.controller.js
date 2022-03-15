const { createMarks, getAllMarks, deleteMarks } = require("../services/mark.service")

const newMark = async (req, res) =>{
	try {
		const newMark = await createMarks(req.body.obtain, req.body.subject, req.body.user)
		const saveNewMark = await newMark.save()
		res.status(200).json(saveNewMark);
	} catch (error) {
		console.log(error)
		res.status(500).json(error);
	}
}


const getAllMark = async(req, res)=>{
	try {
		const subjects = await getAllMarks(req.params.userId)
		res.status(200).json(subjects)
	} catch (error) {
		res.status(500).json(error)		
	}
}

const deleteMark = async(req, res)=>{
	try {
		const id = req.params.id
		const deletemarks = await deleteMarks(id)
		res.status(200).json({message:"Mark is deleted successfully..", deletemarks})
	} catch (error) {
		res.status(500).json(error)
	}
}

module.exports = {
	newMark,
	getAllMark,
	deleteMark
}