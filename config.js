import dotenv from 'dotenv'

dotenv.config()// env를 불러옴

function required(key,defaultValue = undefined){
    const value = process.env[key] || defaultValue // 원래 Env를 못 읽는데 dotenv를 설치하고 config실행하면 process객체를 통해 읽기가능 or key가 들어거나 뒤에것이 들어감
    if(value==null){
        throw new Error(`키 ${key}는 undefined!!`)
    }
    return value
}

export const config = {  //외부에서 갖다 쓸수있게 해줌
    jwt:{
        secretKey:required('JWT_SECRET'),
        expiresInSec:parseInt(required('JWT_EXPIRES_SEC',259200))
    },
    bcrypt:{
        saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS',10))
    },
    host:{
        port:parseInt(required('HOST_PORT',8080))
    },
    db:{
        host: required('DB_HOST'),
        user: required('DB_USER'),
        password: required('DB_PASSWORD'),
        database: required('DB_DATABASE'),
        port: required('DB_PORT')

    }

} //한번 코드 흐름을 다시 볼 필요가있음

// npm i mysql2
