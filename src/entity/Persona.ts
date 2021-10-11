import { IsDateString, IsInt, IsString } from "class-validator";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Persona {

    @IsInt()
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    nombre: string;

    @IsString()
    @Column()
    primerApellido: string;

    @IsString()
    @Column()
    segundoApellido: string;

    @IsDateString()
    @Column({type: 'date', default: '2020-01-01'})
    fechaNacimiento: Date;

}
