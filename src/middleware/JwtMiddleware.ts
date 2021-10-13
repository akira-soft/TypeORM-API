import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig";

export const checkJWT = (request: Request, response: Response, next: NextFunction) => {
    const apiToken = <string>request.headers['api_token'];

    let payload: any;

    try {
        payload = jwt.verify(apiToken, jwtConfig.jwtSecretKey);

        const { userId, email } = payload;
        next();

    } catch (error) {
        return response.status(401).json({message: 'No authorized'});
    }

}
