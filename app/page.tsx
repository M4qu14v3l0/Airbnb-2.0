import { Inter } from '@next/font/google'
import Banner from './components/Banner/Banner'
import ExploreNearby from './components/ExploreNearby/ExploreNearby'
import LargeCard from './components/LargeCard/LargeCard'
import LiveAnyWhere from './components/LiveAnyWhere/LiveAnyWhere'


export default function Home() {
  return (
    <main>
      <Banner />
      <div className='max-w-7xl mx-auto px-8 sm:px-16'>
        <ExploreNearby />
        <LiveAnyWhere />
        <LargeCard 
          img='https://wallpapercave.com/wp/LHTNEGF.jpg'
          title='The Greatest Outdoors'
          description='Whislists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </div>
    </main>
  )
}
