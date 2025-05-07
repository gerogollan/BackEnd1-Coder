import { Router } from "express";
import ProductManager from "../managers/productManager.js";
import path from "path";


const router = Router();
const productFilePath = path.join(process.cwd(), "src", "data", "products.json");
const productManager = new ProductManager(productFilePath);


//ProductListHome
router.get("/", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("home", { products , layout: "main" });
});

//RealtimeProducts
router.get("/realtimeproducts", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("realtimeproducts", { products , layout: "main"});
});

export default router;
