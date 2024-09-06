/*
  Warnings:

  - The primary key for the `threads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idThreads` on the `threads` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_threadsIdThreads_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_threadsIdThreads_fkey";

-- AlterTable
ALTER TABLE "threads" DROP CONSTRAINT "threads_pkey",
DROP COLUMN "idThreads",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "numberOfReplies" DROP NOT NULL,
ADD CONSTRAINT "threads_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_threadsIdThreads_fkey" FOREIGN KEY ("threadsIdThreads") REFERENCES "threads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_threadsIdThreads_fkey" FOREIGN KEY ("threadsIdThreads") REFERENCES "threads"("id") ON DELETE SET NULL ON UPDATE CASCADE;
