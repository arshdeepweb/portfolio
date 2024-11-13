import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-2 px-4 md:px-20 flex justify-around md:justify-between items-center">
      {/* <div className="text-2xl font-bold">mkd</div> */}
      <Image src='/A.png' width={100} height={100} alt='logo' />
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-white hover:text-gray-400">Home</Link>
        <Link href="#about" className="text-white hover:text-gray-400">About</Link>
        <Link href="#skill" className="text-white hover:text-gray-400">Skills</Link>
        <Link href="#project" className="text-white hover:text-gray-400">Projects</Link>
      </div>
      <Link href="#contact">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">Contact Us</button>
      </Link>
    </nav>
  )
}

export default Navbar