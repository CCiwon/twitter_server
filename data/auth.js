import { db } from "../db/database.js"

export async function findByUsername(username){
    return db.execute('SELECT * FROM users WHERE username=?', [username]) // sql 실행 Db는 Sql하고 연결된 객체 입력받은 유저네임을 배열로 감싼다
    .then((result)=>result[0][0]) 
}

export async function findById(id){
    // WHERE 절에서 id=?를 사용해야 합니다.
    return db.execute('SELECT * FROM users WHERE id=?', [id]).then((result)=>result[0][0])
}

export async function createUser(user){
    const {username,password,name,email,url} = user
    return db.execute('INSERT INTO users (username,password,name,email,url) VALUES (?,?,?,?,?)',
        [username,password,name,email,url]
    ).then((result)=>result[0].insertId)

    // 사용되지 않는 부분: `users = [user, ...users]` (배열을 변경하는 코드가 서버 측에는 필요하지 않음)
    // users 배열을 변경하려면 서버에서 이를 사용하는 방식에 맞게 구조를 재조정해야 합니다.
    return user
}
