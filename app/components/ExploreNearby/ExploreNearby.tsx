import SmallCard from "./SmallCard"
import { use } from "react"

interface ExploreData {
    img : string
    location : string
    distance : string
}

async function getAllData() {
    return await (await fetch('https://www.jsonkeeper.com/b/4G1G')).json()
}


export default function ExploreNearby() {

    const allLocations = use(getAllData())

    return (
        <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            <SmallCard locations={allLocations}/>
        </section>
    )
}
