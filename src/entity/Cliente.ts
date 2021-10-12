import {isBoolean, IsBoolean, isDate, isEmail, IsEmail, IsInt, IsNotEmpty, isNumber, IsNumber, isString, IsString, Max, Min, MinLength} from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import { Persona } from "./Persona";

@Entity('clientes')
export class Cliente {

    @IsInt()
    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail()
    @Column({unique: true})
    correoElectronico: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    @Column()
    tipoCliente: string;

    @IsBoolean()
    @Column({default: false})
    aplicaDescuento: boolean;

    @IsNumber()
    @Min(5)
    @Max(100)
    @Column()
    descuentoMaximo: number;

    @IsBoolean()
    @Column({default: true})
    estado: boolean;

    @OneToOne(() => Persona, persona => persona.cliente, {cascade: true, nullable: false, eager: true})
    @JoinColumn({name: 'idPersona', referencedColumnName: 'id'})
    persona: Persona;

    static checkInputs(inputsOfNewClient: any) : any {

        const message  = 'no es correcto';
        let innaceptableAttributes = {
            message: 'Todo está bien',
            attributesError: {},
            isSomeBad: false
        };

        if (!inputsOfNewClient.correoElectronico) {
            innaceptableAttributes.attributesError['correoElectronico'] = `Correo electrónico ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isString(inputsOfNewClient.tipoCliente)) {
            innaceptableAttributes.attributesError['tipoCliente'] = `Tipo cliente ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isBoolean(inputsOfNewClient.aplicaDescuento)) {
            innaceptableAttributes.attributesError['aplicaDescuento'] = `aplicaDescuento ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isNumber(inputsOfNewClient.descuentoMaximo)) {
            innaceptableAttributes.attributesError['descuentoMaximo'] = `descuentoMaximo ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isBoolean(inputsOfNewClient.estado)) {
            innaceptableAttributes.attributesError['estado'] = `estado ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isString(inputsOfNewClient.nombre)) {
            innaceptableAttributes.attributesError['nombre'] = `nombre ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isString(inputsOfNewClient.primerApellido)) {
            innaceptableAttributes.attributesError['primerApellido'] = `primerApellido ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isString(inputsOfNewClient.segundoApellido)) {
            innaceptableAttributes.attributesError['segundoApellido'] = `segundoApellido ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        if (!isDate(inputsOfNewClient.fechaNacimiento)) {
            innaceptableAttributes.attributesError['fechaNacimiento'] = `fechaNacimiento ${message}`;
            innaceptableAttributes.isSomeBad = true;
        }

        return innaceptableAttributes;
    }

    static create(inputsOfNewClient : any) : Cliente {

        const persona = new Persona(
            inputsOfNewClient.nombre,
            inputsOfNewClient.primerApellido,
            inputsOfNewClient.segundoApellido,
            inputsOfNewClient.fechaNacimiento
        );
        const clientNew  = new Cliente();

        clientNew.persona           = persona;
        clientNew.correoElectronico = inputsOfNewClient.correoElectronico;
        clientNew.tipoCliente       = inputsOfNewClient.tipoCliente;
        clientNew.descuentoMaximo   = inputsOfNewClient.descuentoMaximo;
        clientNew.estado            = inputsOfNewClient.estado;
        clientNew.aplicaDescuento   = inputsOfNewClient.aplicaDescuento;

        return clientNew;

    }

}
