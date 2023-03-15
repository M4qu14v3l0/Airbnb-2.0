"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns'
import InfoCard from './components/infoCard/InfoCard';
import { use } from "react"
import MapApp from './components/map/MapApp';

async function getAllLocations() {
  return await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/infoCard/`)).json()
}

export default function page() {
  const searchParams = useSearchParams();
  const searchInput = searchParams.get("searchInput")
  const startDate = searchParams.get("startDate")
  const endDate = searchParams.get("endDate")
  const numberOfGuests = searchParams.get("numberOfGuests")

  const formattedStartDate =  format(new Date(`${startDate}`), "dd MMMM yy")
  const formattedEndDate =  format(new Date(`${endDate}`) , "dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  const searchResults = use(getAllLocations())

  return (
    <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>300+ Stays - {range} - for {numberOfGuests} guests</p>

            <h1 className='text-3xl front-semibold mt-2 mb-6'>Stays in {searchInput}</h1>

            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                <p className='button'>Cancellation Flexibility</p>
                <p className='button'>Type of place</p>
                <p className='button'>Price</p>
                <p className='button'>Rooms and Beds</p>
                <p className='button'>Filter</p>
            </div>
            <div className=''>
              <InfoCard locations={searchResults}/>
            </div>
        </section>
        <section className='hidden xl:inline-flex xl:min-w-[600px] xl:h-full xl:-z-10'>
          <MapApp searchResults={searchResults}/>
        </section>
    </main>
  )
}