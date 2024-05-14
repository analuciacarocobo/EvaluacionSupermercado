import { Request, Response } from "express";
import ProductRepository from '../repositories/ProductRepository';

let getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductRepository.getAllProducts();
        return res.status(200).json(products);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while fetching products" });
    }
}

export default getProducts;