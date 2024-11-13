import { validationResult } from "express-validator";

export const validate = (req,res,next) =>{
    const errors = validationResult(req) // 유효성검사를 통과 못하면 error에다가 넣어줌
    if(errors.isEmpty()){ //에러가 없다면
        return next()
    }
    return res.status(400).json({message: errors.array()[0].msg}) //에러 메세지중 첫번째
}