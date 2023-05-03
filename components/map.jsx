import React, { useState, useRef, useEffect } from 'react'
import Map from 'react-map-gl'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2lja29wYW0iLCJhIjoiY2xneWg5YzI1MDllYjNucDlyeDBqenVhNSJ9.3g23IMu8cIopnbTgKXM4pw'

function Maps() {

    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(-70.9)
    const [ltd, setLtd] = useState(43.45)
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if(map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/sickopam/clh72fbfo00n601qt4tll9dk5',
            center: [lng, ltd],
            zoom: zoom
        })
    })

  return (
    <div ref={mapContainer} className='map-container'></div>
  )
}

export default Maps
