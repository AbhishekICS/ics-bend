const router = require('express').Router()


//authentication route
router.post('/auth/register',  register )
router.post('/auth/login', login)



module.exports = router