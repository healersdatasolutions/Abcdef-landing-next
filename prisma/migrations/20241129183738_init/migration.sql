-- CreateTable
CREATE TABLE "SocialData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "twitterPostId" TEXT NOT NULL,
    "instagramPostUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "youtubeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "socialDataId" INTEGER NOT NULL,
    CONSTRAINT "Video_socialDataId_fkey" FOREIGN KEY ("socialDataId") REFERENCES "SocialData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
