// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    img: string
    location: string
    title: string
    total: string
    description: string
    star: number
    price: string
    long: number
    lat: number
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [
        {
            img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/46019064.jpg?k=6d24e6aad048cde81963118339594253e7793f24327744695af82d98dde4bc5d&o=&hp=1",
            location: "Arequipa",
            title:"La Hostería Boutique Hotel",
            description: "Esta posada, situada en una casa colonial restaurada con un precioso patio decorado con azulejos y una pequeña fuente, ofrece habitaciones con WiFi gratuita a solo 5 minutos a pie de la plaza",
            star: 4.5,
            price: "S/.150 cada noche",
            total: "S/.350 Total",
            long:  -71.53641027688424,
            lat:  -16.396302734684028,
        },
        {
            img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/182257503.jpg?k=a5e921cd9205a7ab090c00bb9d4011a668a06db0b98fe9cb7c7b590e3e327de7&o=&hp=1",
            location: "Arequipa",
            title:"BTH Hotel Arequipa Lake",
            description: "El BTH Hotel Arequipa Lake está situado a orillas del pintoresco lago Estelar, rodeado de jardines paisajistas y campos de flores.",
            star: 4.3,
            price: "S/.130 cada noche",
            total: "S/.260 Total",
            long: -71.49712581736308,
            lat:   -16.452927361316384,
        },
        {
            img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/61476757.jpg?k=3f7d8e338e5c616babf32bfa4c9478893e0a7950b25efa959ec85f3cd6f402f5&o=&hp=1",
            location: "Arequipa",
            title:"Katari Hotel at Plaza de Armas",
            description: "El Katari Hotel at Plaza de Armas, situado en la Plaza de Armas, frente a la histórica catedral de la ciudad, ofrece habitaciones con conexión WiFi gratuito en Arequipa.",
            star: 4.2,
            price: "S/.150 cada noche",
            total: "S/.300 Total",
            long: -71.53723244434727 ,
            lat:  -16.399203465057298,
        },
        {
            img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/409398829.jpg?k=e17b5a5c78c95d52b84927f739f347de41d34bce3727bcc6ad80e561cbb5b3c4&o=&hp=1",
            location: "Arequipa",
            title:"Plaza Central",
            description: "Este hotel con vistas al volcán Misti y a la pintoresca Plaza Mayor de Arequipa, ofrece habitaciones con una decoración elegante.",
            star: 3.5,
            price: "S/.80 cada noche",
            total: "S/.160 Total",
            long: -71.53771891551119,
            lat:  -16.39914182614535,
        }
    ]
  )
}
