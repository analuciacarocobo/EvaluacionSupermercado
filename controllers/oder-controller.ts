import { Request, Response } from "express";
import OrderRepository from '../repositories/OrderRepository';

let createOrder = async (req: Request, res: Response) => {
    try {
        const { productIds } = req.body;
        const userId: number | undefined = req.user?.id; 
        
        if (userId === undefined) {
            return res.status(401).json({ error: "Usuario no autenticado" });
        }

        await OrderRepository.createOrder(userId, productIds);
        
        return res.status(201).json({ status: 'Pedido realizado exitosamente' });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ error: "Ocurrió un error al realizar el pedido" });
    }
}

export default createOrder;