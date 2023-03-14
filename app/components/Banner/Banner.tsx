import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image 
            src={"https://wallpapercave.com/wp/wp3812038.jpg"}
            alt={"banner"}
            fill
            style={{objectFit: "cover" }}
            
        />
        <div className="absolute w-full h-full text-center bg-black bg-opacity-50">
            <p className="relative top-1/2 font-medium text-sm sm:text-lg text-white">Not sure where to go? Perfect.</p>
            <button className="relative top-1/2 text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
        </div>
    </div>
  )
}