import { Router } from "express";
import { cadastrarProduto } from "../controller/produtoController.js";
import { listarProdutos } from "../controller/produtoController.js";
import { atualizarProduto } from "../controller/produtoController.js";

const router = Router();

router.post('/produtos', cadastrarProduto);
router.get('/listar-produtos', listarProdutos);
router.put('/produtos/:id', atualizarProduto);


export default router;