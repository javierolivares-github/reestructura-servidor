import { Router } from "express";
import productsController from "../controllers/products.controller.js";
import { authorization, passportCall } from "../middlewares/passport.middleware.js";
import { productDataValidator } from "../validators/productData.validator.js";
const router = Router();

router.get("/", productsController.getAll);

router.get("/:pid", productsController.getById);

router.post("/", passportCall("jwt"), authorization("admin"), productDataValidator, productsController.create);

router.put("/:pid", passportCall("jwt"), authorization("admin"), productsController.update);

router.delete("/:pid", passportCall("jwt"), authorization("admin"), productsController.deleteProduct);

export default router;