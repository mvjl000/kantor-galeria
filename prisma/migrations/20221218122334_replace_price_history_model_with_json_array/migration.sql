/*
  Warnings:

  - You are about to drop the `PriceHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PriceHistory" DROP CONSTRAINT "PriceHistory_currencyId_fkey";

-- AlterTable
ALTER TABLE "Currency" ADD COLUMN     "price_history" JSONB[];

-- DropTable
DROP TABLE "PriceHistory";
