'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Key, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import NftCard from './NftCard'

export default function Nft() {
  return (
    <div className='relative min-h-screen'>
      {/* Gradient decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -translate-y-[10%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <div className="w-full h-full bg-[url('/gradient.png')] bg-contain bg-no-repeat rotate-180 opacity-40 mix-blend-color-dodge" />
        </div>
        <div className="absolute bottom-0 left-0 -translate-y-[70%] size-[18.85rem] lg:size-[68.85rem]">
          <div className="w-full h-full bg-[url('/gradient.png')] bg-contain bg-no-repeat rotate-180 opacity-40 mix-blend-color-dodge" />
        </div>
      </div>

      <section className="py-16 lg:py-20 px-4" id='authentication'>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-primary">
              Get Your Authentication Key
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse Our Medical Card NFT
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12"
          >
            <Card className="relative bg-[url('/gradient8.png')] bg-opacity-95 backdrop-blur-sm bg-center bg-cover overflow-hidden border-0">
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/10" />
              <CardContent className="relative p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                        Secure Medical Identity
                      </h2>
                      <p className="text-muted-foreground/90 leading-relaxed">
                        Use it for swift login and secure identification across medical platforms. Your health data, protected by blockchain technology.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Badge variant="default" className="px-4 py-2 flex items-center gap-2 z-20">
                        <Shield className="size-4" />
                        <span>HIPAA Compliant</span>
                      </Badge>
                      <Badge variant="default" className="px-4 py-2 flex items-center gap-2 z-20">
                        <Key className="size-4" />
                        <span>Unique Access</span>
                      </Badge>
                      <Badge variant="default" className="px-4 py-2 flex items-center gap-2 z-20">
                        <Lock className="size-4" />
                        <span>Encrypted Data</span>
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button variant="secondary" className="group z-20">
                        Learn More
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button 
                      rel="noopener noreferrer"
                        className="z-40 w-full sm:w-auto px-5 bg-[#13336e] border text-white border-[#13336e] hover:bg-white hover:text-[#0A0F29] transition duration-500 rounded-full hover:-translate-y-2"
                        onClick={() => window.location.href = 'https://nft-healers.vercel.app/'}
                      >
                        Generate Now
                      </Button>
                    </div>
                  </div>

                  <div className="relative  max-w-[500px] mx-auto lg:ml-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/5 to-transparent -translate-x-full animate-[shimmer_1s_infinite]" />
                    <div className="relative  rounded-xl overflow-hidden backdrop-blur-sm ">
                      <NftCard />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

