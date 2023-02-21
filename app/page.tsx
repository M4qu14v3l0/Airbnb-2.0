import { Inter } from '@next/font/google'
import Banner from './components/Banner/Banner'
import ExploreNearby from './components/ExploreNearby/ExploreNearby'
import LargeCard from './components/LargeCard/LargeCard'
import LiveAyWhere from './components/LiveAnyWhere/LiveAnyWhere'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='max-w-7xl mx-auto px-8 sm:px-16'>
        <ExploreNearby />
        <LiveAyWhere />
        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Whislists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </div>
    </main>
  )
}
