import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @IsInt()
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    firstName: string;

    @IsNotEmpty()
    @Column()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({unique: true})
    email: string;

    @IsString()
    @MinLength(8)
    @Column()
    password: string;

    @IsDate()
    @Column()
    birthay: Date;

}
