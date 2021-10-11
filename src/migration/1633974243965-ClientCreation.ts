import {MigrationInterface, QueryRunner} from "typeorm";

export class ClientCreation1633974243965 implements MigrationInterface {
    name = 'ClientCreation1633974243965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`personas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`primerApellido\` varchar(255) NOT NULL, \`segundoApellido\` varchar(255) NOT NULL, \`fechaNacimiento\` date NOT NULL DEFAULT '2020-01-01', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clientes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`correoElectronico\` varchar(255) NOT NULL, \`tipoCliente\` varchar(255) NOT NULL, \`aplicaDescuento\` tinyint NOT NULL DEFAULT 0, \`descuentoMaximo\` int NOT NULL, \`estado\` tinyint NOT NULL DEFAULT 1, \`idPersona\` int NOT NULL, UNIQUE INDEX \`IDX_446331760719de1e9782a2cbbf\` (\`correoElectronico\`), UNIQUE INDEX \`REL_cc8b5abcc6a07bf2232135707d\` (\`idPersona\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD CONSTRAINT \`FK_cc8b5abcc6a07bf2232135707d3\` FOREIGN KEY (\`idPersona\`) REFERENCES \`personas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP FOREIGN KEY \`FK_cc8b5abcc6a07bf2232135707d3\``);
        await queryRunner.query(`DROP INDEX \`REL_cc8b5abcc6a07bf2232135707d\` ON \`clientes\``);
        await queryRunner.query(`DROP INDEX \`IDX_446331760719de1e9782a2cbbf\` ON \`clientes\``);
        await queryRunner.query(`DROP TABLE \`clientes\``);
        await queryRunner.query(`DROP TABLE \`personas\``);
    }

}
