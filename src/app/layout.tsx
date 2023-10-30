import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'

import { Suspense } from 'react'



import Nav from './components/nav'

const inter = Inter({ subsets: ['latin'] , variable:"--font-inter"})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});


export const metadata: Metadata = {
  title: "Lia Paisley",
  description: "The official website of Emelia Paisley",
  openGraph: {
    title: "Lia Paisley",
    description: "The official website of Emelia Paisley",
    url: "https://emelia.pl",
    images: "https://emelia.pl/favicon.ico",
    siteName: "Lia Paisley",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-neutral-800  ${plexMono.variable} font-ibm`}>
        <Suspense><Nav/></Suspense>
        {children}
        </body>
    </html>
  )
}
