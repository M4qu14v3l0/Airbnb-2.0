"use client"

import Image from "next/image";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { format } from 'date-fns'

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

    const [ placeholderNav , setPlaceHolderNav ] = useState <string> ("Start your search") 

    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges : any) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const formattedStartDate =  format(new Date(`${startDate}`), "dd MMMM yy")
    const formattedEndDate =  format(new Date(`${endDate}`) , "dd MMMM yy")
    
    const resetInput = () => {
        setSearchInput("")
    }

    const placeholderNavigate = (prop:boolean) => {
        if(prop){
            const range = `${formattedStartDate} - ${formattedEndDate}`
            setPlaceHolderNav(`${searchInput} | ${range} |  ${numberOfGuests}`)
        }else{
            setPlaceHolderNav("Start your search")
        }
    }

    const handleOnClick = (value : boolean) => {
        resetInput()
        placeholderNavigate(value)
    }


  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div onClick={() => {router.push("/") , placeholderNavigate(false)} } className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'}
                alt="airbnb"
                fill
                style={{objectFit: "contain" , objectPosition: "left"}}
            />
        </div>

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder={placeholderNav} className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 "/>
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
                        href={{
                            pathname: '/search',
                            query:{
                                searchInput:`${searchInput}`,
                                startDate:startDate.toISOString(),
                                endDate:endDate.toISOString(),
                                numberOfGuests:numberOfGuests,
                            }
                        }}
                    >
                        <button onClick={() => handleOnClick(true)} className="flex-grow text-red-400">Search</button>
                    </Link>
                </div>

            </div>
        )}

    </header>
  )
}