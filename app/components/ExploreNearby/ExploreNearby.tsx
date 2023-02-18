import SmallCard from "./SmallCard"
import { use } from "react"

interface ExploreData {
    img : string
    location : string
    distance : string
}

async function getAllLocations() {
    return await (await fetch('https://www.jsonkeeper.com/b/4G1G')).json()
}


export default function ExploreNearby() {

    const allLocations = use(getAllLocations())

    return (
        <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <SmallCard locations={allLocations}/>
            </div>
        </section>
    )
}
