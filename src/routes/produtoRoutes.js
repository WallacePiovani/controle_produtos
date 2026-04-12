import { Router } from "express";
import { cadastrarProduto } from "../controller/produtoController.js";
import { listarProdutos } from "../controller/produtoController.js";

const router = Router();

router.post('/produtos', cadastrarProduto);
router.get('/listar-produtos', listarProdutos);


export default router;