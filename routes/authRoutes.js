const {Router} = require('express')
const { singup_get, signup_post, login_get, login_post,logout_get } = require('../controllers/authController')
const router=Router() //instance of router
router.get('/signup',singup_get)
router.post('/signup',signup_post)
router.get('/login',login_get)
router.post('/login',login_post)
router.get('/logout',logout_get)
module.exports=router