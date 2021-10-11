import { IsDateString, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Cliente } from "./Cliente";

@Entity('personas')
export class Persona {

    @IsInt()
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    @Column()
    nombre: string;

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    @Column()
    primerApellido: string;

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    @Column()
    segundoApellido: string;

    @IsDateString()
    @IsNotEmpty()
    @Column({type: 'date', default: '2020-01-01'})
    fechaNacimiento: Date;

    @OneToOne(() => Cliente, cliente => cliente.persona)
    cliente: Cliente;

}
