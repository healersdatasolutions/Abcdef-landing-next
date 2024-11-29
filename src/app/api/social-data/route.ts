/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export async function GET() {
  try {
    const socialData = await prisma.socialData.findFirst({
      include: { videos: true },
    });
    return NextResponse.json(socialData);
  } catch (error) {
    console.error('Error fetching social data:', error);
    return NextResponse.json({ error: 'Error fetching social data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { twitterPostId, instagramPostUrl, videos } = body;

    const updatedSocialData = await prisma.socialData.upsert({
      where: { id: 1 },
      update: {
        twitterPostId,
        instagramPostUrl,
        videos: {
          deleteMany: {},
          create: videos.map((video: any) => ({
            youtubeId: video.id,
            title: video.title,
            description: video.description,
          })),
        },
      },
      create: {
        twitterPostId,
        instagramPostUrl,
        videos: {
          create: videos.map((video: any) => ({
            youtubeId: video.id,
            title: video.title,
            description: video.description,
          })),
        },
      },
      include: { videos: true },
    });

    return NextResponse.json(updatedSocialData);
  } catch (error) {
    console.error('Error updating social data:', error);
    return NextResponse.json({ error: 'Error updating social data' }, { status: 500 });
  }
}