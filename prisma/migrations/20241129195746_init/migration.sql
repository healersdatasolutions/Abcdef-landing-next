-- CreateTable
CREATE TABLE "SocialData" (
    "id" SERIAL NOT NULL,
    "twitterPostId" TEXT NOT NULL,
    "instagramPostUrl" TEXT NOT NULL,

    CONSTRAINT "SocialData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "youtubeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "socialDataId" INTEGER NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_socialDataId_fkey" FOREIGN KEY ("socialDataId") REFERENCES "SocialData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
