// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  location : string
  img : string
  distance : string
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [
    {
      location: "Puno",
      img: "https://www.peru.travel/Contenido/Destino/Imagen/pe/37/1.3/Principal/Los%20Uros.tablet.png",
      distance: "3km - drive"
    },
    {
      location: "Arequipa",
      img:"https://www.peru.travel/Contenido/Destino/Imagen/pe/27/1.1/Principal/Plaza%20de%20Armas%20Arequipa.jpg",
      distance: "0km - drive"
    },
    {
      location: "Lima",
      img: "https://www.peru.travel/Contenido/Destino/Imagen/pe/33/1.7/Principal/lima-banner-3.tablet.jpg",
      distance: "5k - drive"
    },
    {
      location: "Madre de Dios",
      img:"https://www.peru.travel/Contenido/Destino/Imagen/es/10/1.1/Principal/Tambopata.jpg",
      distance: "10km - drive"

    },
    {
      location:  "La Libertad",
      img:"https://www.peru.travel/Contenido/Destino/Imagen/pe/31/1.1/Principal/La%20Libertad.jpg",
      distance: "7k - drive"

    },
    {
      location: "Ica",
      img:"https://www.peru.travel/Contenido/Destino/Imagen/es/5/1.2/Principal/SouthAmericaPeru2017_1010_180704-5912_AGP_HDR.jpg",
      distance: "4k - drive"

    },
    {
      location: "Tumbes",
      img: "https://www.peru.travel/Contenido/Destino/Imagen/pe/38/1.4/Principal/Tumbes.tablet.jpg",
      distance: "12k - drive"
    },
    {
      location: "Junin",
      img:"https://www.peru.travel/Contenido/Destino/Imagen/pe/30/1.1/Principal/Junin.jpg",
      distance: "8k - drive"
    },
    ]
  )
}
