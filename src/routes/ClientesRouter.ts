import { Router } from "express";
import { ClienteController } from "../controller/ClienteController";

const CLIENTE_ROUTER = Router();


CLIENTE_ROUTER.get("/", ClienteController.all);
CLIENTE_ROUTER.get("/:id", ClienteController.one);
CLIENTE_ROUTER.post("/:id", ClienteController.save);
CLIENTE_ROUTER.put("/:id");
CLIENTE_ROUTER.delete("/:id", ClienteController.remove);

export default CLIENTE_ROUTER;
