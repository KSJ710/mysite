/*
  Warnings:

  - You are about to alter the column `confirm_status` on the `members` table. The data in that column could be lost. The data in that column will be cast from `Char(2)` to `Char(1)`.

*/
-- AlterTable
ALTER TABLE "members" ALTER COLUMN "confirm_status" SET DATA TYPE CHAR(1);
