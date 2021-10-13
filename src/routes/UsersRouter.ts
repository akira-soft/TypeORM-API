import { Router } from "express";
import { UserController } from "../controller/UserController";

const USER_ROUTER = Router();

USER_ROUTER.get("/", UserController.all);

USER_ROUTER.get("/:id", UserController.one);
USER_ROUTER.post("/:id", UserController.save);
USER_ROUTER.put("/:id");
USER_ROUTER.delete("/:id", UserController.remove);

export default USER_ROUTER;
