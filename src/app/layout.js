import './globals.css'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fintech Dynamics',
  description: 'Replicated from MUI template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#f9fafb] text-[#111827]`}>
        <Navbar />
        <main className="pt-16 md:pt-18">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}