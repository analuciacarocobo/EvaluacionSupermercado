import { Request, Response } from "express";
import OrderRepository from '../repositories/OrderRepository';

let getOrderStatus = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const { orderId } = req.params;

        if (userId === undefined) {
            return res.status(401).json({ error: "Usuario no autenticado" });
        }

        const order = await OrderRepository.getOrderById(Number(orderId));

        if (!order) {
            return res.status(404).json({ error: "Pedido no encontrado" });
        }

       
        if (order.userId !== userId) {
            return res.status(403).json({ error: "No tiene permiso para acceder a este pedido" });
        }

        return res.status(200).json({ status: order.status });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ error: "Ocurrió un error al consultar el estado del pedido" });
    }
}

export default getOrderStatus;