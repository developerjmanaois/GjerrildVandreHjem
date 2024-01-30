import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'Leaflet/dist/leaflet.css'

import pin from '../assets/pin.png'

let DefaultIcon = L.icon( {
  iconUrl: pin,// icon,
  iconSize: [ 24, 24],//[ 24, 36 ],
  iconAnchor: [ 12, 36 ],
  className: 'marker-style'
} )
L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = ( { coord =[56, 10], zoom = "13",  info= "", setLat = null, setLon = null } ) => {

    const mapRef = useRef()   //reference/krog til map'et

    const markerRef = useRef() //reference til markøren-så den kan flyttes rundt

    useEffect(() => {
      if (!mapRef.current) {
        mapRef.current = L.map('mapcontainer').setView(coord, zoom);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapRef.current);
  
        markerRef.current = L.marker(coord).addTo(mapRef.current);
        if (info !== "") {
          markerRef.current.bindPopup(info);
        }
      } else {
        mapRef.current.setView(coord, zoom);
        markerRef.current.setLatLng(coord);
  
        if (setLat || setLon) {
          mapRef.current.on('click', e => {
            setLat(e.latlng.lat);
            setLon(e.latlng.lng);
          });
        }
      }
    }, [coord, info, setLat, setLon]);

    return (
      <div id='mapcontainer' style={{ width: '100%', height: '250px' }} className='shadow-xl card bg-base-100'>Kortet loader...</div>

    );
  };
export default LeafletMap
