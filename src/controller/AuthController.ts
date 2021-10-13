import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import * as jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig";

export class AuthController {

    static login = async (request: Request, response: Response) => {
        
        const {email, password} = request.body;

        if (!(email && password)) {
            return response.status(401).json({message: 'Email and password required'});
        }

        try {
            const userRepository = getRepository(User);
            const user = await userRepository.findOneOrFail({email: email});
    
            if (!user.isCorrectPassword(password)) {
                return response.status(401).json({message: 'Email or password incorrect'})
            }
            
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                jwtConfig.jwtSecretKey,
                {expiresIn: '20m'}
            );
            
            return response.status(200).json({message: 'User autenticated', yourToken: token});
            
        } catch (error) {

            return response.status(422).json({message: 'Something was failed', errors: error});
        }

    }
}
