import express from 'express';
import produtoRoutes from './routes/produtoRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(produtoRoutes);

export default app; 