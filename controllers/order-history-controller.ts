import { Request, Response } from 'express';
import OrderRepository from '../repositories/OrderRepository';

const getOrderHistory = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id; 
        if (!userId) {
            return res.status(401).json({ error: 'User not authenticated' });
        }
        const orderHistory = await OrderRepository.getOrdersByUserId(userId);
        res.status(200).json(orderHistory);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default { getOrderHistory };