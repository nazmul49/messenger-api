import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameNameToFirstName1733467718292 implements MigrationInterface {
    name = 'RenameNameToFirstName1733467718292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "firstName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "firstName" TO "name"`);
    }

}
