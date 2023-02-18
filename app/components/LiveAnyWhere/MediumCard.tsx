import Image from "next/image"

interface Props {
    cards: Array<{
        img : string
        title : string
    }>
  }


export default function MediumCard({cards} : Props) {
  return (
    <>
        {
            cards.map(card => (
                <div key={card.title} className="cursor-pointer hover:scale-105 transition trasform duration-300 ease-out">
                    <div className="relative h-80 w-80">
                        <Image 
                            src={card.img}
                            alt={card.title}
                            fill
                            className="rounded-xl"
                        />
                    </div>
                    <h3 className="text-2xl mt-3">{card.title}</h3>
                </div>
            ))
        }
    </>
  )
}