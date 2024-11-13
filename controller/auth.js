import * as authRepository from '../data/auth.js'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = 'abcd1234%^&*' //관리를 잘 해야됨 코드에다가 넣으면 안됨

async function makeToken(id){
    const token = jwt.sign({
        id:id,
        isAdimin:false
    
    },secret, {expiresIn:'1h'})
    return token
}

export async function signup(req, res, next){
    const { username, password, name, email } = req.body
   // const users = await authRepository.createUser(username, password, name, email)
    const hashed = bcrypt.hashSync(password,10)
    const users = await authRepository.createUser(username, hashed, name, email)
    if(users){
        res.status(201).json(users)
    }
}

export async function login(req, res, next){
    const {username, password} = req.body
    const user = await authRepository.findbyUsername(username)
    if(!user){
        res.status(2401).json(`${username} 아이디를 찾을수 없음`)
    }
    else{
        if(bcrypt.compareSync(password,user.password)){
            res.status(201).header('Token',makeToken(username)).json(`${username}로그인완료`)
        }
        else{
            res.status(404).json({message:`${username}님 아이디 또는 비밀번호 확인`})
        }
    }
}

export async function verify(req,res,next){
    const token = req.header['Token']
    if(token){
        res.status(200).json(token)
    }
}