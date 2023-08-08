import { Router } from "express";

import { ProductsMongo } from "../dao/managers/mongo/productsMongo.js";

const productService = new ProductsMongo();


const router = Router();

router.get("/", async(req,res)=>{
    try {
        const limit = req.query.limit;
        const products = await productService.get();
        if(limit){
            //devolver productos de acuerdo al limite
        } else {
            res.json({status:"success", data:products});
        }
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:pid",(req,res)=>{});

router.post("/", async(req,res)=>{
    //Agregar el producto
    try {
        const productInfo = req.body;
        const productCreated = await productService.save(productInfo);
        res.json({status:"success", data:productCreated, message:"producto creado"});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.put("/:pid",(req,res)=>{
    const productInfo = req.body;
    //actualiza el producto
});

router.delete("/:pid",(req,res)=>{});

export {router as productsRouter}