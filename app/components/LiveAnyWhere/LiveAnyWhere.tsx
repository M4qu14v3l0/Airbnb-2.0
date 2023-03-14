import { use } from "react"
import MediumCard from "./MediumCard"

interface Props {
  cards: Array<{
      img : string
      title : string
  }>
}

async function getAllCardsData() {
  return await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/liveAnyWhere`)).json()
}



export default function LiveAnyWhere() {

  const allCardsData = use(getAllCardsData())

  return (
    <section>
        <h2 className="text-4xl font-semibold py-8">Live Any Where</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          <MediumCard cards={allCardsData}/>
        </div>
    </section>
  )
}