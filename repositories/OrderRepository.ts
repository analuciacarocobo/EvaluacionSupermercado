import db from '../config/config-db';

type QueryResult<T> = [T[], any]; // Suponiendo que el primer elemento del array es el resultado de la consulta y el segundo elemento es información adicional

class OrderRepository {
    static async createOrder(userId: number, productIds: number[]) {
        
        const sql = 'INSERT INTO orders (userId, productIds) VALUES (?, ?)';
        const values = [userId, JSON.stringify(productIds)]; 
        return await db.execute(sql, values); 
    }

    static async getOrdersByUserId(userId: number) {
       
        const sql = 'SELECT * FROM orders WHERE userId = ?';
        const values = [userId];
        const result = await db.execute(sql, values); 
        return result as QueryResult<any[]>; 
    }

    static async updateOrderStatus(orderId: number, newStatus: string) {
       
        const sql = 'UPDATE orders SET status = ? WHERE id = ?';
        const values = [newStatus, orderId];
        return await db.execute(sql, values); 
    }

    static async getOrderById(orderId: number) {

        const sql = 'SELECT * FROM orders WHERE id = ?';
        const values = [orderId];
        const result = await db.execute(sql, values); 
        return (result[0] as any[])[0]; 
    }
}

export default OrderRepository;