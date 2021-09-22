import { Router, response, request } from "express";

const USER_ROUTER = Router();

USER_ROUTER.get("/", (request, response) => {
    response.json("It works!");
});

USER_ROUTER.get("/:id");
USER_ROUTER.post("/:id");
USER_ROUTER.put("/:id");
USER_ROUTER.delete("/:id");

export default USER_ROUTER;
