import { error } from "console"
import UserModel from "../models/UserModel"
import dotenv from "dotenv"
import bcrypt from 'bcrypt'
dotenv.config()

const register = async (req: any, res: any) => {
    const body = req.body
    const { email, name, password } = body

    try {
        // Kiểm tra email tồn tại?
        const user = await UserModel.findOne({email})
        if (user) {
            throw new Error(`Account Already Exists`)
        }

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)

        //lưu hashpassword vào password
        body.password = hashpassword

        //lưu lại newUser
        const newUser = new UserModel(body)
        await newUser.save()

        delete newUser.password

        console.log(newUser)

        res.status(200).json({
            message: 'Register',
            data: body,
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

export {
    register
} 