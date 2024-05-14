import { Request, Response } from "express";
import UserService from '../services/UserService';
import User from '../Dto/UserDto';

let register = async (req: Request, res: Response) => {
    try {
        const { email, password, nombres } = req.body;
        const registerUser = await UserService.register(new User(email, nombres, password));
        return res.status(201).send({ status: 'register ok' });
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).send({ errorInfo: error.sqlMessage });
        }
    }
}

export default register;