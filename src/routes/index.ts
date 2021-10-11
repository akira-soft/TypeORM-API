import { Router } from "express";
import CLIENTE_ROUTER from "./ClientesRouter";

const ROUTES = Router();

ROUTES.use('/clients', CLIENTE_ROUTER);

export default ROUTES;
