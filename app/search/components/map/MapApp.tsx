
import Map from 'react-map-gl';
import { useState } from 'react'
import { getCenter } from 'geolib';

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

  const [lati , setLati] = useState(-16.39889)
  const [lon , setLon] = useState(-71.535)

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }))

  console.log(coordinates)

  return <Map
      mapStyle="mapbox://styles/m4qu14v3l0/clf91y50w000801mnk7hbvxj8"
      mapboxAccessToken={process.env.mapbox_key}
      // {...viewport}
      initialViewState={{
        longitude: lon,
        latitude: lati,
        zoom: 11
      }}
      style={{width: "100%", height: "100%"}}
    />;
}
