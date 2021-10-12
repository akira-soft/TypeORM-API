import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Cliente} from "../entity/Cliente";

export class ClienteController {

    static all = async (request: Request, response: Response) => {
        let clienteRepository = getRepository(Cliente);
        let clients = await clienteRepository.find({where: {estado: true}});

        response.status(200).json(clients);
    }

    static one = async (request: Request, response: Response) => {

        try {
            let clienteRepository = getRepository(Cliente);
            let client = await clienteRepository.findOne(request.params.id);

            client ? response.status(200).json(client) : response.status(404).json({message: 'No se encuentra el cliente'});
            
        } catch (error) {
            response.status(422).json(error);
        }

    }

    static edit = async (request: Request, response: Response) => {
        
        try {
            let clienteRepository = getRepository(Cliente);
            let clientToEdit = await clienteRepository.findOne(request.params.id);

            if (!clientToEdit) response.status(404).json({message: 'No se encuentra el cliente'});

            if (clientToEdit) {
                clientToEdit.tipoCliente             = request.body.tipoCliente;
                clientToEdit.aplicaDescuento         = request.body.aplicaDescuento;
                clientToEdit.correoElectronico       = request.body.correoElectronico;
                clientToEdit.persona.nombre          = request.body.nombre;
                clientToEdit.persona.primerApellido  = request.body.primerApellido;
                clientToEdit.persona.primerApellido  = request.body.primerApellido;
                clientToEdit.persona.fechaNacimiento = request.body.fechaNacimiento;
                
                await clienteRepository.save(clientToEdit);

                response.status(201).json({message: 'Cliente modificado'});
            }
            
        } catch (error) {
            response.status(422).json({message: 'Algo ha ocurrido mal.'});
        }

    }

    static save = async (request: Request, response: Response) => {

        try {
            const result = await Cliente.checkInputs(request.body);
            
            if (result.isSomeBad) response.status(422).json({message: 'Los campos recibidos no se pueden procesar', errorFields: result.attributesError});
            
            if (!result.isSomeBad) {
                let clienteRepository = getRepository(Cliente);
                const clienteToSave   = Cliente.create(request.body);
                await clienteRepository.save(clienteToSave);

                response.status(201).json({message: 'Cliente guardado'});
            }
            
        } catch (error) {
            response.status(422).json({message: 'Algo ha ocurrido mal.'});
        }
    }

    static remove = async (request: Request, response: Response) => {
        let clienteRepository = getRepository(Cliente);
        let clientToRemove = await clienteRepository.findOne(request.params.id);

        if (!clientToRemove) response.status(404).json({message: 'No se encuentra el cliente'});

        if (clientToRemove) {
            clientToRemove.estado = false;
            await clienteRepository.save(clientToRemove);
            response.status(200).json({message: 'Cliente eliminado'});
        }
    }

}