import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Cliente} from "../entity/Cliente";

export class ClienteController {

    static all = async (request: Request, response: Response) => {
        let clienteRepository = getRepository(Cliente);
        let clients = await clienteRepository.find();

        response.status(200).json(clients);
    }

    static one = async (request: Request, response: Response) => {
        let clienteRepository = getRepository(Cliente);

        try {

            let client = await clienteRepository.findOne(request.params.id);
            
            client ? response.status(200).json(client) : response.status(404).json('No se encuentra el cliente');
            
        } catch (error) {
            response.status(422).json(error);   
        }

    }

    static save = async (request: Request, response: Response) => {
        let clienteRepository = getRepository(Cliente);
        let clientSaved = await clienteRepository.save(request.body);

        response.status(201).json(clientSaved);
    }

    static remove = async (request: Request, response: Response) => {
        let clienteRepository = getRepository(Cliente);
        let userToRemove = await clienteRepository.findOne(request.params.id);

        let clientRemoved = await clienteRepository.remove(userToRemove);

        response.status(200).json(clientRemoved);
    }

}