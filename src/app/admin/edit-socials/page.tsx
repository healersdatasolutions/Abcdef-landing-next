/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/hooks/use-toast"
import { PlusCircle, Trash2, Loader2, Eye } from 'lucide-react'


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'

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
    videos: [],
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [string1, setString1] = useState('')
  const [string2, setString2] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/social-data');
        if (!response.ok) {
          throw new Error('Failed to fetch social data');
        }
        const data = await response.json();
        if (data) {
          setSocialData({
            twitterPostId: data.twitterPostId,
            instagramPostUrl: data.instagramPostUrl,
            videos: data.videos.map((v: any) => ({
              id: v.youtubeId,
              title: v.title,
              description: v.description,
            })),
          });
        }
      } catch (error) {
        console.error('Error fetching social data:', error);
        toast({
          title: "Error",
          description: "Failed to fetch social data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false)
      }
    };
    fetchData();
  }, []);

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
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    if (!socialData.twitterPostId) newErrors.twitterPostId = 'Twitter Post ID is required'
    if (!socialData.instagramPostUrl) newErrors.instagramPostUrl = 'Instagram Post URL is required'
    socialData.videos.forEach((video, index) => {
      if (!video.id) newErrors[`video-id-${index}`] = 'YouTube Video ID is required'
      if (!video.title) newErrors[`video-title-${index}`] = 'Video Title is required'
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/social-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(socialData),
      });
      if (!response.ok) {
        throw new Error('Failed to update social data');
      }
      toast({
        title: "Success",
        description: "Social data updated successfully!",
      })
    } catch (error) {
      console.error('Error updating social data:', error);
      toast({
        title: "Error",
        description: "Failed to update social data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
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
    setDeleteIndex(null)
  }

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (string1 === process.env.NEXT_PUBLIC_STRING_1 && string2 === process.env.NEXT_PUBLIC_STRING_2) {
      setIsAuthenticated(true)
    } else {
      router.push('/')
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Authentication Required</h1>
        <form onSubmit={handleAuth} className="space-y-4">
          <Input
            type="password"
            value={string1}
            onChange={(e) => setString1(e.target.value)}
            placeholder="Enter String 1"
          />
          <Input
            type="password"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
            placeholder="Enter String 2"
          />
          <Button type="submit">Authenticate</Button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Edit Social Links and Videos</h1>
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
                  className={errors.twitterPostId ? 'border-red-500' : ''}
                />
                {errors.twitterPostId && <p className="text-red-500 text-sm mt-1">{errors.twitterPostId}</p>}
              </div>
              <div>
                <label htmlFor="instagramPostUrl" className="block text-sm font-medium mb-1">Instagram Post URL</label>
                <Input
                  id="instagramPostUrl"
                  name="instagramPostUrl"
                  value={socialData.instagramPostUrl}
                  onChange={handleInputChange}
                  placeholder="Enter Instagram post URL"
                  className={errors.instagramPostUrl ? 'border-red-500' : ''}
                />
                {errors.instagramPostUrl && <p className="text-red-500 text-sm mt-1">{errors.instagramPostUrl}</p>}
              </div>
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview Embeds
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Social Media Embeds Preview</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <h3 className="mb-2 font-medium">Twitter Embed</h3>
                        {socialData.twitterPostId && (
                          <blockquote className="twitter-tweet">
                            <a href={`https://twitter.com/x/status/${socialData.twitterPostId}`}></a>
                          </blockquote>
                        )}
                      </div>
                      <div>
                        <h3 className="mb-2 font-medium">Instagram Embed</h3>
                        {socialData.instagramPostUrl && (
                          <iframe
                            src={`https://www.instagram.com/p/${socialData.instagramPostUrl.split('/').pop()}/embed`}
                            width="100%"
                            height="450"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency={true}
                          ></iframe>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
                <div key={index} className="space-y-2 p-4 bg-gray-50 rounded-lg relative">
                  <h3 className="font-medium">Video {index + 1}</h3>
                  <Input
                    name={`video-id-${index}`}
                    value={video.id}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="YouTube Video ID"
                    className={errors[`video-id-${index}`] ? 'border-red-500' : ''}
                  />
                  {errors[`video-id-${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`video-id-${index}`]}</p>}
                  <Input
                    name={`video-title-${index}`}
                    value={video.title}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Video Title"
                    className={errors[`video-title-${index}`] ? 'border-red-500' : ''}
                  />
                  {errors[`video-title-${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`video-title-${index}`]}</p>}
                  <Textarea
                    name={`video-description-${index}`}
                    value={video.description}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Video Description"
                  />
                  <Button 
                    onClick={() => setDeleteIndex(index)} 
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

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            'Update Social Data'
          )}
        </Button>
      </form>

      <AlertDialog open={deleteIndex !== null} onOpenChange={() => setDeleteIndex(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this video?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the video from your social data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteIndex !== null && removeVideo(deleteIndex)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
