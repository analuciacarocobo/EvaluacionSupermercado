import express from "express";
import bodyParser from 'body-parser';
import orderRoutes from './routes/order';

const app = express();

app.use(bodyParser.json());

app.use('/orders', orderRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto",{PORT});
});