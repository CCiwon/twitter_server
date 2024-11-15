import express from 'express'
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'
import { config } from './config.js'
import { initSocket } from './connection/ socket.js' //사용자가 들어오면 소켓을 나눠줌
import { db } from "./db/database.js"


const app = express()

app.use(express.json())

app.use('/tweets',tweetsRouter)
app.use('/auth',authRouter)

app.use((req,res,next) =>{
    res.sendStatus(404)
})
// db 연결확인
//db.getConnection().then((connection)=> console.log(connection))

const server = app.listen(config.host.port)
initSocket(server) // 웹서버 생성하고 변수에 담아주고 initSocket에 담아서 보내줌