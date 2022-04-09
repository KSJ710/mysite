/*
  Warnings:

  - You are about to drop the column `confirm_Status` on the `members` table. All the data in the column will be lost.
  - Added the required column `confirm_status` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "confirm_Status",
ADD COLUMN     "confirm_status" CHAR(2) NOT NULL;
