import db from '../config/config-db';

class ProductRepository {
    static async getAllProducts() {
        const sql = 'SELECT id, nombre, descripcion, precio, imagen_url FROM productos';
        const [rows] = await db.execute(sql);
        return rows;
    }
}

export default ProductRepository;