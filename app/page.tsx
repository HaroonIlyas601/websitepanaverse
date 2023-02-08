"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from './components/hero'
import Features from './components/feature'
import Testinomial from './components/testimonials'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Hero/>
   <Features/>
   <Testinomial/>
   </>
  )
}
