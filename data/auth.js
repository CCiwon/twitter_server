import MongoDb from 'mongodb'
import { getUsers } from '../db/database.js'
import { mapOptionFieldNames } from 'sequelize/lib/utils'

// const DataTypes = SQ.DataTypes

// export const User = sequelize.define(
//     'user',
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         username: {
//             type: DataTypes.STRING(50),
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING(500),
//             allowNull: false
//         },
//         name: {
//             type: DataTypes.STRING(20),
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING(50),
//             allowNull: false
//         },
//         url: DataTypes.TEXT
//     },
//     { timestamps: false}
// )

// export async function findByUsername(username) {
//     return User.findOne({ where: { username }})    
// }

// export async function findById(id) {
//     return User.findByPk(id)
// }

// export async function createUser(user) {
//     return User.create(user).then((data) => data.dataValues.id)
// }


const ObjectID = MongoDb.ObjectId

export async function findByUsername(username){
  return getUsers().find({username}).next().then(mapOptionalUser)    
}
 

export async function findById(id){
    return getUsers().find({ _id: new ObjectID(id) })
    .next()
    .then(mapOptionalUser)
}

export async function createUser(user){
    return getUsers().insertOne(user).then((result)=> result.insertedId.toString())
}

function mapOptionalUser(user){
    return user ? {...user, id: user._id.toString()} : user
}
