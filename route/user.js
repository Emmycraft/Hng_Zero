const express=require('express')
const router=express.Router()
const getData=require('../controllers/controller')

router.get('/user',getData.userData)
module.exports = router