import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Max, Min, MinLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cliente {

    @IsInt()
    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail()
    @Column()
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

}
