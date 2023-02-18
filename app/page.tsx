import { Inter } from '@next/font/google'
import Banner from './components/Banner/Banner'
import ExploreNearby from './components/ExploreNearby/ExploreNearby'
import LiveAyWhere from './components/LiveAnyWhere/LiveAnyWhere'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='max-w-7xl mx-auto px-8 sm:px-16'>
        <ExploreNearby />
        <LiveAyWhere />
      </div>
    </main>
  )
}
