import {MigrationInterface, QueryRunner} from "typeorm";

export class Entitynamechange1595736545702 implements MigrationInterface {
    name = 'Entitynamechange1595736545702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "skill" ("id" SERIAL NOT NULL, "abilities" character varying NOT NULL, "guildMemberId" integer, CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guild_member" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_f9ef1ab3cca782850f1cfc78a8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "skill" ADD CONSTRAINT "FK_70812bf8289bb880530beda102e" FOREIGN KEY ("guildMemberId") REFERENCES "guild_member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skill" DROP CONSTRAINT "FK_70812bf8289bb880530beda102e"`);
        await queryRunner.query(`DROP TABLE "guild_member"`);
        await queryRunner.query(`DROP TABLE "skill"`);
    }

}
