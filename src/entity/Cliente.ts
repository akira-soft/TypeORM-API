import { IsDateString, IsInt, IsString } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cliente {

    @IsInt()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    correoElectronico: string;

    @Column()
    tipoCliente: string;

    @Column()
    aplicaDescuento: boolean;

    @Column()
    descuentoMaximo: number;

    @Column()
    estado: boolean;

}
