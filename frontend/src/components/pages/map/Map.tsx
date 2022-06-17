import {
    ImageOverlay,
    MapContainer,
    SVGOverlay,
    TileLayer,
    useMapEvent
} from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { Checkbox } from "@material-ui/core";

function MyComponent() {
    const [showMordor, setShowMordor] = useState(false);

    const map = useMapEvent("zoom", (ev) => {
        setShowMordor(false);
        switch (ev.target.getZoom()) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                setShowMordor(true);
                break;
            default:
                setShowMordor(true);
        }
    });

    return showMordor ? (
        <ImageOverlay
            bounds={[
                [-30, 52],
                [-70, 90]
            ]}
            url={"/map/mordor.svg"}
        />
    ) : null;
}

function Map() {
    const [hobbitRoute, setHobbitRoute] = useState(false);
    const [dwarfRoute, setDwarfRoute] = useState(false);

    function onHobbitRouteClick() {
        setHobbitRoute(!hobbitRoute);
    }

    function callTest() {
        console.log("mordor clicked2");
    }

    function onLegolasGimliRouteClick() {
        setDwarfRoute(!dwarfRoute);
        document
            .getElementById("mordorSVG")!
            .addEventListener("click", function () {
                console.log("mordor clicked");
            });
    }

    return (
        <div style={{ width: "800px", height: "500px" }}>
            <label>
                Paths of
                <Checkbox onClick={() => onHobbitRouteClick()} />
                Frodo & Sam
            </label>
            <label>
                <Checkbox onClick={() => onLegolasGimliRouteClick()} />
                Legolas & Gimli
            </label>
            <MapContainer
                center={[1, 1]}
                zoom={1}
                maxZoom={4}
                minZoom={1}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
            >
                <MyComponent />

                {hobbitRoute && (
                    <ImageOverlay
                        bounds={[
                            [-200, -100],
                            [100, 100]
                        ]}
                        url={"/map/frodo-sam-path.svg"}
                    />
                )}
                {dwarfRoute && (
                    <ImageOverlay
                        bounds={[
                            [-200, -100],
                            [100, 100]
                        ]}
                        url={"/map/legolas-gimli-path.svg"}
                    />
                )}
                <TileLayer noWrap={true} url="/tiles/{z}/{x}/{y}.jpg" />
            </MapContainer>
        </div>
    );
}

export default Map;
