const {Router} = require('express')
const { sample_get, sample_post } = require('../controllers/sampleController')
const router = Router();
router.get('/sample',sample_get)
router.post("/sample",sample_post)
module.exports=router