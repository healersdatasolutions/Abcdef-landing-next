/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/hooks/use-toast"
import { ArrowLeft, PlusCircle, Trash2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { IconSettingsCog } from '@tabler/icons-react'

interface Video {
  id: string;
  title: string;
  description: string;
}

interface SocialData {
  twitterPostId: string;
  instagramPostUrl: string;
  videos: Video[];
}

export default function EditSocialsPage() {
  const [socialData, setSocialData] = useState<SocialData>({
    twitterPostId: '',
    instagramPostUrl: '',
    videos: [
      { id: '', title: '', description: '' },
      { id: '', title: '', description: '' },
      { id: '', title: '', description: '' },
    ],
  })

  useEffect(() => {
    const fetchData = async () => {
      // Placeholder for data fetching
      // const response = await fetch('/api/social-data');
      // const data = await response.json();
      // setSocialData(data);
    }
    fetchData()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target
    if (name.startsWith('video')) {
      const [, field, idx] = name.split('-')
      setSocialData(prev => ({
        ...prev,
        videos: prev.videos.map((video, i) => 
          i === Number(idx) ? { ...video, [field]: value } : video
        )
      }))
    } else {
      setSocialData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Placeholder for API call
      // await fetch('/api/update-social-data', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(socialData),
      // });
      toast({
        title: "Success",
        description: "Social data updated successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update social data. Please try again.",
        variant: "destructive",
      })
    }
  }

  const addVideo = () => {
    setSocialData(prev => ({
      ...prev,
      videos: [...prev.videos, { id: '', title: '', description: '' }]
    }))
  }

  const removeVideo = (index: number) => {
    setSocialData(prev => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="container mx-auto py-10 px-4">
        <Link 
          href="/" 
          className="absolute top-4 left-4 p-2 flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>  
          <div className="flex justify-between items-center gap-4 logo bg-transparent  py-3 rounded-full">
        <Image src="/HealersHealthcareOfficialLogo 1.png" alt="Healers Healthcare" width={160} height={40} className="w-40 mt-5" />
        <div className='flex justify-center items-center gap-2 mr-5'>

        <IconSettingsCog className="h-8 w-8 text-white/50" />
        <h1 className='text-white/50'>DEV-TOOLS</h1>
        </div>
      </div>
      <h1 className="text-3xl mt-5 font-bold mb-8">Edit Social Links and Videos</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Embeds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="twitterPostId" className="block text-sm font-medium mb-1">Twitter Post ID</label>
                <Input
                  id="twitterPostId"
                  name="twitterPostId"
                  value={socialData.twitterPostId}
                  onChange={handleInputChange}
                  placeholder="Enter Twitter post ID"
                />
              </div>
              <div>
                <label htmlFor="instagramPostUrl" className="block text-sm font-medium mb-1">Instagram Post URL</label>
                <Input
                  id="instagramPostUrl"
                  name="instagramPostUrl"
                  value={socialData.instagramPostUrl}
                  onChange={handleInputChange}
                  placeholder="Enter Instagram post URL"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                YouTube Videos
                <Button onClick={addVideo} variant="outline" size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Video
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {socialData.videos.map((video, index) => (
                <div key={index} className="space-y-2 p-4 bg-zinc-800 rounded-lg relative">
                  <h3 className="font-medium">Video {index + 1}</h3>
                  <Input
                    name={`video-id-${index}`}
                    value={video.id}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="YouTube Video ID"
                  />
                  <Input
                    name={`video-title-${index}`}
                    value={video.title}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Video Title"
                  />
                  <Textarea
                    name={`video-description-${index}`}
                    value={video.description}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Video Description"
                  />
                  <Button 
                    onClick={() => removeVideo(index)} 
                    variant="destructive" 
                    size="sm"
                    className="absolute top-2 right-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Button type="submit" className="w-full">Update Social Data</Button>
      </form>
    </div>
  )
}

