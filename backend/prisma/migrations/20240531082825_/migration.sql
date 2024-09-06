/*
  Warnings:

  - The primary key for the `threads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_threads` on the `threads` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `threads` table. All the data in the column will be lost.
  - You are about to drop the column `replies` on the `threads` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_user` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `users` table. All the data in the column will be lost.
  - Added the required column `numberOfReplies` to the `threads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "threads" DROP CONSTRAINT "threads_pkey",
DROP COLUMN "id_threads",
DROP COLUMN "likes",
DROP COLUMN "replies",
ADD COLUMN     "idThreads" SERIAL NOT NULL,
ADD COLUMN     "numberOfReplies" TEXT NOT NULL,
ADD COLUMN     "userId_user" INTEGER,
ADD CONSTRAINT "threads_pkey" PRIMARY KEY ("idThreads");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id_user",
DROP COLUMN "profile_image",
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "idUser" SERIAL NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("idUser");

-- CreateTable
CREATE TABLE "replies" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userIdUser" INTEGER,
    "threadsIdThreads" INTEGER,

    CONSTRAINT "replies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userIdUser" INTEGER,
    "threadsIdThreads" INTEGER,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userIdUser" INTEGER,

    CONSTRAINT "followers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "following" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userIdUser" INTEGER,

    CONSTRAINT "following_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_userId_user_fkey" FOREIGN KEY ("userId_user") REFERENCES "users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_userIdUser_fkey" FOREIGN KEY ("userIdUser") REFERENCES "users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_threadsIdThreads_fkey" FOREIGN KEY ("threadsIdThreads") REFERENCES "threads"("idThreads") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_userIdUser_fkey" FOREIGN KEY ("userIdUser") REFERENCES "users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_threadsIdThreads_fkey" FOREIGN KEY ("threadsIdThreads") REFERENCES "threads"("idThreads") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_userIdUser_fkey" FOREIGN KEY ("userIdUser") REFERENCES "users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "following" ADD CONSTRAINT "following_userIdUser_fkey" FOREIGN KEY ("userIdUser") REFERENCES "users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;
