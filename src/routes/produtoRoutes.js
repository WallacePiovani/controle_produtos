import { Router } from "express";
import { cadastrarProduto } from "../controller/produtoController.js";

const router = Router();

router.post('/produtos', cadastrarProduto);

export default router;