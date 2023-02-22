"use client"

import Image from "next/image";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";


import { 
    MagnifyingGlassIcon ,
    Bars3Icon,
    UserIcon,
    UsersIcon,
    GlobeAltIcon

    } from '@heroicons/react/24/solid'


export default function Header() {

    const [ searchInput , setSearchInput ] = useState("")
    const [ startDate , setStartDate ] = useState(new Date())
    const [ endDate , setEndDate ] = useState(new Date())
    const [ numberOfGuests , setNumberOfGuests ] = useState <any> (1)

    const router = useRouter()

    const resetInput = () => {
        setSearchInput("")
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges : any) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }



  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src={'https://links.papareact.com/qd3'}
                alt="airbnb"
                fill
                style={{objectFit: "contain" , objectPosition: "left"}}
            />
        </div>

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Start your search" className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 "/>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md: mx-2" />
        </div>

        <div className="flex items-center space-x-4 justify-end text-gray-500">
            <p className="hidden md:inline">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <Bars3Icon className="h-6"/>
                <UserIcon className="h-6"/>
            </div>
        </div>
        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto mt-5">
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}
                />
                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                    <UsersIcon className="h-5" />
                    <input
                    type='number'
                    className="w-12 pl-2 text-lg outline-none text-red-400"
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    min={1}
                    value={numberOfGuests}
                    />
                </div>
                <div className="flex">
                    <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                    <Link
                        href={`/locations/[...slug]`}
                        as={`/locations/${searchInput}/${startDate.toISOString}/${endDate.toISOString}/${numberOfGuests}`}
                    >
                        <button className="flex-grow text-red-400">Search</button>
                    </Link>
                    {/* mañana se hace todo */}
                </div>

            </div>
        )}

    </header>
  )
}