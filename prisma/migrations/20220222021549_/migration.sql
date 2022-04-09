/*
  Warnings:

  - Added the required column `confirm_Status` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" ADD COLUMN     "confirm_Status" CHAR(2) NOT NULL,
ADD COLUMN     "confirm_expires_at" TIMESTAMPTZ,
ADD COLUMN     "confirm_token" TEXT,
ADD COLUMN     "remember_expires_at" TIMESTAMPTZ,
ADD COLUMN     "remember_token" TEXT;
