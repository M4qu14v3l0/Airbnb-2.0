import Image from "next/image"


interface Props {
    locations: Array<{
        img : string
        location : string
        distance : string
    }>
    }


export default function SmallCard({locations}: Props) {
  return (
    <div>
        {
            locations.map(location => (
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer">
                    <div key={location.img} className="relative h-16 w-16">
                        <Image 
                            src={location.img}
                            alt={location.location}
                            fill
                            className="rounded-lg"
                        /> 
                    </div>

                    <div className="">
                        <h2>{location.location}</h2>
                        <h3>{location.distance}</h3>
                    </div>
                </div>
            ))
        }
    </div>
  )
}