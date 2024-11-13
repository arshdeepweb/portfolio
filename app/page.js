import About from '@/components/About'
import ContactMe from '@/components/Contact'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <ContactMe />
    </div>
  )
}

export default Page