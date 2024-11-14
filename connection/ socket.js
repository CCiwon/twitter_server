import { Server } from "socket.io";
import jwt from 'jsonwebtoken' //토큰 필요
import {config} from '../config.js'

class Socket {  //initSocket하면 객체를 생성
  constructor(server){
    this.io = new Server(server,{ //소켓 서버 생성
        cors:{
            origin:'*' // 코스에러 방지  코스에러: 서로다른 포트는 브라우저에서 막음 배포되면 상관없지만 테스트에서는 문제가 생김
        }
    }) 
    this.io.use((socket,next)=>{
        const token = socket.handshake.auth.token //사용자쪽에 토큰을 담아서 보냄
        if(!token){
            return next(new Error('인증에러'))
        }
        jwt.verify(token,config.jwt.secretKey,(error,decoded)=>{ //소켓 객체가 만들어지는지 확인
            if(error){
                return next(new Error('인증에러'))
            }
            next()
        })
    })
    this.io.on('connection',(socket)=>{  
        console.log('클라이언트 접속')
    })
  }
}

let socket  //전역으로 설정

export function initSocket(server){
    if(!socket){
        socket = new Socket()
    }
}

//소켓 체크
export function getSocketIo(){ // 전역으로 있어서 매개변수를 안넣어도 됨
    if(!socket){
        throw new Error('먼저 Init을 실행하세요')
    }
    return socket.io
}


