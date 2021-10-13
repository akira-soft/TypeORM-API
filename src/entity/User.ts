import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { IsDateString, IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { hashSync, genSaltSync, compareSync } from 'bcryptjs';

@Entity()
export class User extends BaseEntity {

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

    @IsDateString()
    @Column({type: 'date', default: '2021-01-01'})
    birthday: Date;

    hashPassword(): void {
        const salt    = genSaltSync(15);
        this.password = hashSync(this.password, salt);
    }

    isCorrectPassword (anotherPassword: string): boolean {
        return compareSync(anotherPassword, this.password);
    }

}
