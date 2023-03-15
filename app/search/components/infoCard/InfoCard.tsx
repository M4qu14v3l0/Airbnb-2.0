import Image from "next/image"

import { 
  StarIcon ,
  HeartIcon
  } from '@heroicons/react/24/solid'

interface Props {
  locations: Array<{
    img: string
    location: string
    title: string
    total: string
    description: string
    star: number
    price: string
    long: number
    lat: number
  }>
}

export default function InfoCard({locations}: Props) {
  return (
    <>
    {
      locations.map(stay => (
          <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
              <Image 
                src={stay.img}
                alt={stay.title}
                fill
                style={{objectFit:"cover"}}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col flex-grow pl-5">
              <div className="flex justify-between">
                  <p>{stay.location}</p>
                  <HeartIcon className="h-7 cursor-pointer text-red-400" />
              </div>

              <h4 className="text-xl">{stay.title}</h4>
              <div className="border-b w-10 pt-2" />

              <p className="pt-2 text-sm text-gray-500 flex-grow">{stay.description}</p>

              <div className="flex justify-between items-end">
                <p className="flex items-center">
                  <StarIcon className="h-5 text-red-400" />
                  {stay.star}
                </p>
                <div>
                  <p className="text-lg lg:text-2xl font-semibold pb-2">{stay.price}</p>
                  <p className="text-right font-extralight">{stay.total}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}