/*
  Warnings:

  - Added the required column `password` to the `Credential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Credential` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Credential" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Credential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Credential" ("id", "userId") SELECT "id", "userId" FROM "Credential";
DROP TABLE "Credential";
ALTER TABLE "new_Credential" RENAME TO "Credential";
CREATE UNIQUE INDEX "Credential_username_key" ON "Credential"("username");
CREATE UNIQUE INDEX "Credential_userId_key" ON "Credential"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
