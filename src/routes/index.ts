import { Router } from "express";
import AUTH_ROUTER from "./Auth";
import USER_ROUTER from "./UsersRouter";

const ROUTER = Router();

ROUTER.use('/users', USER_ROUTER);
ROUTER.use('/auth', AUTH_ROUTER);

export default ROUTER;
