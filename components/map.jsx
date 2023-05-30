import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2lja29wYW0iLCJhIjoiY2xneWg5YzI1MDllYjNucDlyeDBqenVhNSJ9.3g23IMu8cIopnbTgKXM4pw'

function Maps() {

    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(110.370529)
    const [ltd, setLtd] = useState(-7.797068)
    const [zoom, setZoom] = useState(11)

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
