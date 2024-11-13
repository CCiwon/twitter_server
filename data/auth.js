let users = [
    {
        id:'1',
        username:'apple',
        password:'$2b$10$5thDiOMQwjA6Qn3l6Nt.JeEt7AM44niswsDHyBBzImdh.SGNEGjbq',
        name:'김사과',
        email:'apple@apple.com',
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    },
    {
        id:'2',
        username:'banana',
        password:'$2b$10$R5f.Gx0AEJaGNdAf.0ap6.MO0BNQtqsaSp4atECdze8FphVzGXUPq',
        name:'반하나',
        email:'banana@banana.com',
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    },
    {
        id:'3',
        username:'orange',
        password:'$2b$10$bwtZ/5zvcm3Bvp/0lgW8cuLSv.X1eoqShK/jydNIUCfgyRMzmU9ly',
        name:'오렌지',
        email:'orange@orange.com',
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    }
]

export async function createUser(username, password, name, email){
    const user = {
        id:'4',
        username,
        password,
        name,
        email,
        url:'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-woman-s-face-with-long-brown-eyes-image_2888808.jpg'
    }
    users = [user, ...users]
    return user
}

export async function findByUsername(username){
    const user = users.find((user) => user.username === username)
    return user
}

export async function findById(id){
    return users.find((user)=> user.id== id)
}