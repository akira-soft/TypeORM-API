import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRefactoring1633482970708 implements MigrationInterface {
    name = 'UserRefactoring1633482970708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`DBTEST\`.\`user\` ADD \`birthday\` date NOT NULL DEFAULT '2021-01-01'`);
        await queryRunner.query(`ALTER TABLE \`DBTEST\`.\`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`DBTEST\`.\`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``);
        await queryRunner.query(`ALTER TABLE \`DBTEST\`.\`user\` DROP COLUMN \`birthday\``);
    }

}
