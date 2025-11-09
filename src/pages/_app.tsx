import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ParticleBackground from '../components/ParticleBackground'
import CustomCursor from '../components/CustomCursor'
import PageTransition from '../components/PageTransition'
import { ThemeProvider } from '../contexts/ThemeContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <main className="flex-1 relative z-10">
          <Component {...pageProps} />
        </main>
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
