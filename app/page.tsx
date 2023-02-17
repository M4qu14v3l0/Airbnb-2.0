import { Inter } from '@next/font/google'
import Banner from './components/Banner/Banner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Banner />
    </main>
  )
}
