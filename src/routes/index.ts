import { Router } from "express";
import USER_ROUTER from "./UsersRouter";

const ROUTER = Router();

ROUTER.use('/users', USER_ROUTER);

export default ROUTER;
