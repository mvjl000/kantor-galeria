/*
  Warnings:

  - You are about to drop the column `price_history` on the `Currency` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Currency" DROP COLUMN "price_history";

-- CreateTable
CREATE TABLE "PriceHistory" (
    "date" TEXT NOT NULL,
    "buy" DECIMAL(65,30) NOT NULL,
    "sell" DECIMAL(65,30) NOT NULL,
    "currencyId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "PriceHistory_date_key" ON "PriceHistory"("date");

-- AddForeignKey
ALTER TABLE "PriceHistory" ADD CONSTRAINT "PriceHistory_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE SET NULL ON UPDATE CASCADE;
