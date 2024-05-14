import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express' {
    interface Request {
        user?: { id: number }; 
    }
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.get('Authorization');
    if (authorization) {
        const token = authorization.split(' ')[1];
        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as { id: number };
                req.user = { id: decoded.id };
                next();
            } catch (error) {
                return res.status(403).json({ status: 'Unauthorized' });
            }
        } else {
            return res.status(401).json({ status: 'Token not provided' });
        }
    } else {
        return res.status(401).json({ status: 'Authorization header is required' });
    }
}

export default verifyToken;