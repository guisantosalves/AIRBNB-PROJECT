import * as React from "react";
import Map, {Marker, Popup} from 'react-map-gl';
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapp = ({searchResults}) => {

    const [selectedLocation, setSelectedLocation] = React.useState();
    
    // transforming the searchResults in an object that I need in geolib
    // () => ({})  -> returning an object to the coordinates
    const coordinates = searchResults.map((item, index)=>(
        {
            longitude: item.long,
            latitude: item.lat
        }
    ))
    
    // i give an array of lat and long and get the center of that
    const center = getCenter(coordinates)

    const [viewport, setViewport] = React.useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    console.log(selectedLocation)
    // onMove manage the state
    return(
        <Map
            {...viewport}
            onMove={(evt)=>setViewport(evt.viewState)}
            mapStyle={"mapbox://styles/workguisantos/cl9h8uoav000314m86dwdo967"}
            mapboxAccessToken={process.env.mapbox_key}
            style={{width: '100%', height: '100%'}}
        >
            {searchResults.map((item, index)=>{
                return(
                    <div key={index} style={{zIndex: 999}}>
                        <Marker
                            style={{zIndex: 1}}
                            longitude={item.long}
                            latitude={item.lat}
                        >
                            <p
                                role="img"
                                onClick={()=>setSelectedLocation(item)} 
                                className="cursor-pointer text-2xl"
                                aria-label="push-pin"
                            >
                                📌
                            </p>
                        </Marker>

                        {/* pop up will appear here */}
                        {selectedLocation?.long === item.long ? (
                            <Popup
                                closeOnClick={false}
                                onClose={()=>setSelectedLocation({})}
                                latitude={item.lat}
                                longitude={item.long}
                                style={{zIndex: 1}}
                                anchor="bottom"
                            >
                                {item.price}
                            </Popup>
                        ):(
                            false
                        )}
                    </div>
                )
                
            })}
        </Map>
    )   
}

export default Mapp;