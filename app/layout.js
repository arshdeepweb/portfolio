import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Arshdeep Singh | Full-stack Developer',
  description:
    'Arshdeep Singh - Full-stack Developer crafting scalable, modern web applications with clean code and powerful UI/UX.',
  keywords: [
    'Arshdeep Singh',
    'Full-stack Developer',
    'Web Developer',
    'JavaScript Developer',
    'React Developer',
    'Node.js Developer',
    'Portfolio Website',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer'
  ],
  authors: [{ name: 'Arshdeep Singh', url: 'https://arshdeep.tech' }],
  creator: 'Arshdeep Singh',
  publisher: 'Arshdeep Singh',
  metadataBase: new URL('https://arshdeep.tech'), // replace with actual domain

  icons: {
    icon: '/header.jpeg',
    shortcut: '/header.jpeg',
    apple: '/header.jpeg',
  },

  openGraph: {
    title: 'Arshdeep Singh | Full-stack Developer',
    description:
      'Experienced Full-stack Developer building high-performance web applications using modern technologies.',
    url: 'https://arshdeep.tech',
    siteName: 'Arshdeep Singh Portfolio',
    images: [
      {
        url: '/header.jpg', // Place your Open Graph image in /public
        width: 1200,
        height: 630,
        alt: 'Arshdeep Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
