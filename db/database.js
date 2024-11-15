import mysql from 'mysql2'
import { config } from '../config.js'


const pool = mysql.createPool({ //데이터 베이스 접속
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password

})

export const db = pool.promise() // 프로미스로 가져옴

