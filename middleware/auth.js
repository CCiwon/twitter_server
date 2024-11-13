import jwt, { decode } from 'jsonwebtoken'
import * as authRespository from '../data/auth.js'


const AUTH_ERROR = {message:'인증에러'}

export const isAuth = async(req,res,next)=>{
    const authHeader = req.get('Authorization')
    console.log(authHeader)

    if(!(authHeader && authHeader.startWith('Bearer'))){
        console.log('헤더에러')
        return res.status(401).json(AUTH_ERROR)

    }
    const token = authHeader.split(' ')[1]

    jwt.verify(
        token, 'abcdefg1234%^&*',async(error,decoded) =>{
            if(error){
                console.log('토큰 에러')
                return res.status(401).json(AUTH_ERROR)
            }
            const user = await authRespository.findById(decode.id)
            if(!user){
                console.log('아이디없음')
                return res.status(401).json(AUTH_ERROR)
            }
            req.userId = user
            next()
        }
    )
}