import { MigrationInterface, QueryRunner } from "typeorm";

export class modifyPropertyColumOptions1681321299108 implements MigrationInterface {
    name = 'modifyPropertyColumOptions1681321299108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "vendido" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "valor" numeric(12,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "valor" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "vendido" DROP DEFAULT`);
    }

}
