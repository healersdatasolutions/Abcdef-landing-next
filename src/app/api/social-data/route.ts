/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

    // Update or create social data
    const updatedSocialData = await prisma.socialData.upsert({
      where: { id: 1 }, // Assuming we always have one record
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

