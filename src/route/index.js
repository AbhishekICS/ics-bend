
const { register, login} = require("../controller/auth.controller");
const { newMark, getAllMark, deleteMark} = require("../controller/mark.controller");
const { getAllStudents, getOneStudent } = require("../controller/student.controller");
const { newSubject, getAllSubjects, deleteSubjects } = require("../controller/subject.controller");
const router = require("express").Router();
const { verifyToken } = require('../middleware/verifyToken.middleware')



//authentication route
router.post('/auth/register',  register )
router.post('/auth/login', login)


//Students route
router.get('/student/all', verifyToken,  getAllStudents)
router.get('/student/:id', verifyToken, getOneStudent)


//Subjects route
router.post('/subject/new',verifyToken, newSubject)
router.get('/subject/all', verifyToken, getAllSubjects)
router.delete('/subject/:id', verifyToken, deleteSubjects)

//Marks route
router.post('/mark/new',verifyToken, newMark)
router.get('/mark/all/:userId', verifyToken, getAllMark)
router.delete('/marks/:id', verifyToken, deleteMark)



module.exports = router