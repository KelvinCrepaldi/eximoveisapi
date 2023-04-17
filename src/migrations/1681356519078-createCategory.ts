import { MigrationInterface, QueryRunner } from "typeorm";

export class createCategory1681356519078 implements MigrationInterface {
    name = 'createCategory1681356519078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(25) NOT NULL, CONSTRAINT "UQ_9b70d5a77ea9f676730ca2aa9cb" UNIQUE ("nome"), CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
    }

}
