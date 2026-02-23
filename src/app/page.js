import React from 'react'
import Hero from '@/components/page/hero'
import WhyChooseUs from "@/components/page/whychooseus"
import CoreServices from "@/components/page/coreservices"
import HowWeHelp from '@/components/page/howwehelp'
import IndustriesWeServe from "@/components/page/industriesweserve"
import Getintouch from "@/components/page/getintouch"
 
export default function page() {
  return (
    <>
    <Hero/>
    <WhyChooseUs/>
    <CoreServices/>
    <HowWeHelp/>
    <IndustriesWeServe/>
    <Getintouch/>
    </>
  )
}
