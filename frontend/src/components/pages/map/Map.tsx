import {
    Circle,
    ImageOverlay,
    MapContainer,
    Marker,
    Polyline,
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
        setShowMarker(true);
        switch (ev.target.getZoom()) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                console.log("4");
        }
    });

    return null;
}

function Map() {
    return (
        <div style={{ width: "800px", height: "500px" }}>
            <MapContainer
                center={[1, 1]}
                zoom={1}
                maxZoom={4}
                minZoom={1}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
            >
                <MyComponent />
               <ImageOverlay
                    bounds={[
                        [-200, -100],
                        [100, 100]
                    ]}
                    url={"/map/frodo-sam-path.svg"}
                />
                <ImageOverlay
                    bounds={[
                        [-200, -100],
                        [100, 100]
                    ]}
                    url={"/map/legolas-gimli-path.svg"}
                />
                <TileLayer noWrap={true} url="/tiles/{z}/{x}/{y}.jpg" />
            </MapContainer>
        </div>
    );
}

export default Map;
