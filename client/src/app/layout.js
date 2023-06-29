import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { AuthProvider } from '../utils/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ethcinemanation',
  description: 'Ethcinemanation is a decentralized movie streaming platform.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar/>         
            {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}
