import { Inter } from '@next/font/google'
import Banner from './components/Banner/Banner'
import ExploreNearby from './components/ExploreNearby/ExploreNearby'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='max-w-7xl mx-auto px-8 sm:px-16'>
        <ExploreNearby />
      </div>
    </main>
  )
}
