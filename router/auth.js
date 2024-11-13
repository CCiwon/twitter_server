import express from 'express'
import * as authController from '../controller/auth.js'
import { body } from 'express-validator'
import { validate } from '../middleware/validator.js'
import { isAuth } from '../middleware/auth.js'


const router = express.Router()
const validateTweet = [
    body('username').trim().isLength({min:3}).withMessage('최소 3자이상입력').matches(/^[a-zA-Z0-9]*$/).withMessage('특수문자 사용불가'),
    body('password').trim().isLength({min:4}).withMessage('최소 4자이상 입력'),
    body('email').trim().isEmail().withMessage('이메일 형식 확인'),validate
]


router.post('/signup', validateTweet,authController.signup)

router.post('/login', authController.login)

router.post('/me', authController.me) //로그인 판별

// 로그인 유지



export default router