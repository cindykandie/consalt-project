import NavBar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ConSalt Platform',
  description: 'ConSalt is a platform that connects companies/ individuals with pre-vetted industry consultants. The platform features a directory of experienced consultants that companies/clients can search and filter through to find the right fit for their needs. ConSalt also offers a community section where professionals can connect with each other.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        
      </body>
    </html>
  )
}
