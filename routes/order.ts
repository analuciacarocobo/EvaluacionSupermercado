import express from 'express';
const router = express.Router();


let orders: { id: number, userId: number, products: number[], status: string }[] = [];


router.post('/', (req, res) => {
    const { userId, products } = req.body;
    const orderId = orders.length + 1;
    orders.push({ id: orderId, userId, products, status: 'Pendiente' });
    res.status(201).json({ message: 'Pedido creado exitosamente', orderId });
});


router.get('/history/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userOrders = orders.filter(order => order.userId === userId);
    res.status(200).json(userOrders);
});


router.put('/:orderId', (req, res) => {
    const orderId = parseInt(req.params.orderId);
    const { status } = req.body;
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = status;
        res.status(200).json({ message: 'Estado del pedido actualizado exitosamente' });
    } else {
        res.status(404).json({ message: 'Pedido no encontrado' });
    }
});


router.get('/:orderId', (req, res) => {
    const orderId = parseInt(req.params.orderId);
    const order = orders.find(order => order.id === orderId);
    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404).json({ message: 'Pedido no encontrado' });
    }
});

export default router;