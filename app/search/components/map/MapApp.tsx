
import { MapContainer, TileLayer, useMap , Marker ,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'

import { getCenter } from 'geolib';
import { 
  MapPinIcon
  } from '@heroicons/react/24/outline'


interface Props {
  searchResults: Array<{
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
}[]

export default function MapApp( {searchResults} : Props ) {


  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }))

  const center : any= getCenter(coordinates)

  const position : any= [center.latitude ,center.longitude ]


  const DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src
  })

  return(
    <MapContainer center={position} zoom={11} scrollWheelZoom={false} className="w-full h-[1200px]">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
       searchResults.map(mark => (
        <Marker position={[mark.lat , mark.long]} icon={DefaultIcon}>
          <Popup>
            {mark.title}
          </Popup>
        </Marker>
       )) 
      }
    </MapContainer>
  ) 



  // <Map
  //     mapStyle="mapbox://styles/m4qu14v3l0/clf91y50w000801mnk7hbvxj8"
  //     mapboxAccessToken={process.env.mapbox_key}
  //     // {...viewport}
  //     initialViewState={{
  //       longitude: center.longitude,
  //       latitude: center.latitude,
  //       zoom: 11
  //     }}
  //     style={{ width: "100%", height: "400px"}}
  //     >
  //       <Marker 
  //         longitude={-71.53723244434727}
  //         latitude={-16.399203465057298}
  //       />
  //   </Map>;
}
// {searchResults.map(result => (
//   <div key={result.long}>
//     <Marker
//     longitude={result.long}
//     latitude={result.lat}
//     anchor={'bottom'}

//     >
//       <MapPinIcon className=' text-red-600 text-sm'/>
//     </Marker>
//   </div>
// ))}
