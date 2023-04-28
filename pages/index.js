import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from "../components/Home";
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Header />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}