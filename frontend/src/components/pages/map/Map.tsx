import {
    MapContainer,
    Marker,
    Popup,
    SVGOverlay,
    TileLayer,
    useMapEvent,
    useMapEvents
} from "react-leaflet";
import React, { MutableRefObject, useState } from "react";
import "leaflet/dist/leaflet.css";

function MyComponent() {
    const [showMarker, setShowMarker] = useState(false);

    const map = useMapEvent("zoom", (ev) => {
        setShowMarker(false);
        switch (ev.target.getZoom()) {
            case 1:
                setShowMarker(true);
                break;
            case 2:

                break;
            case 3:
                break;
            default:
                console.log("4");
        }
    });

    return !showMarker ? null : (
        <Marker position={[30.7, 0.2]}>
            <Popup>Alex</Popup>
        </Marker>
    );
}

function Map() {
    return (
        <div style={{ width: "50vw", height: "70vh" }}>
            <MapContainer
                center={[1, 1]}
                zoom={1}
                maxZoom={4}
                minZoom={1}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
            >
                <MyComponent />
                <TileLayer url="/tiles/{z}/{x}/{y}.jpg" />
            </MapContainer>
        </div>
    );
}

export default Map;
