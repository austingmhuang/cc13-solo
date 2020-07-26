import {MigrationInterface, QueryRunner} from "typeorm";

export class Smallchange1595688340009 implements MigrationInterface {
    name = 'Smallchange1595688340009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "power" RENAME COLUMN "ability" TO "abilities"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "power" RENAME COLUMN "abilities" TO "ability"`);
    }

}
