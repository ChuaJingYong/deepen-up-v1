"use client"

import { Button } from "@/components/ui/button"
import { ChefHat, MessagesSquare } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left background panel - visible on desktop */}
      <div className="hidden lg:block lg:flex-1 bg-white/20 backdrop-blur-sm" />
      
      {/* Main content */}
      <main className="w-full lg:w-[480px] min-h-screen relative flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-400 to-purple-400">
        <div className="w-full max-w-sm mx-auto flex flex-col items-center">
          <Image 
            src="/chat-logo.png" 
            alt="DeepenUp Logo" 
            width={128} 
            height={128}
            className="w-32 h-32 mb-8"
            priority
          />

          <div className="space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold text-white">DeepenUp</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-[280px]">
              Boost your conversation skills and confidence in dating
            </p>
          </div>

          <div className="w-full space-y-4">
            <Link href="/conversation-starters" className="block w-full">
              <Button 
                className="w-full bg-white hover:bg-white/90 text-purple-600"
                size="lg"
              >
                <ChefHat className="mr-2 h-5 w-5" />
                Give me conversation starters
              </Button>
            </Link>

            <Link href="/chat" className="block w-full">
              <Button 
                className="w-full bg-white hover:bg-white/90 text-purple-600"
                size="lg"
              >
                <MessagesSquare className="mr-2 h-5 w-5" />
                Get conversation assistance
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative elements with suppressHydrationWarning */}
        <div 
          suppressHydrationWarning 
          className="absolute top-[-70px] left-[-100px] w-[250px] h-[250px] bg-white/10 rounded-full" 
        />
        <div 
          suppressHydrationWarning 
          className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-white/10 rounded-full" 
        />
      </main>

      {/* Right background panel - visible on desktop */}
      <div className="hidden lg:block lg:flex-1 bg-white/20 backdrop-blur-sm" />
    </div>
  )
}