import {
    ImageOverlay,
    MapContainer,
    TileLayer,
    useMapEvent
} from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { Checkbox } from "@material-ui/core";
import { weatherApi } from "../../../services/api/WeatherApi";
import "./Map.css";

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

    const weather = weatherApi();
    const [temperatureShireCelsius, setTemperatureShireCelsius] = useState(0);
    const [temperatureShireFahrenheit, setTemperatureShireFahrenheit] =
        useState(0);

    const [temperatureMordorCelsius, setTemperatureMordorCelsius] = useState(0);
    const [temperatureMordorFahrenheit, setTemperatureMordorFahrenheit] =
        useState(0);

    getWeather();

    async function getWeather() {
        await weather
            .weatherShire()
            .then((res) => {
                setTemperatureShireCelsius(res.data.current.temp_c);
                setTemperatureShireFahrenheit(res.data.current.temp_f);
            })
            .catch((err) => {
                console.log(err);
            });

        await weather
            .weatherMordor()
            .then((res) => {
                setTemperatureMordorCelsius(res.data.current.temp_c);
                setTemperatureMordorFahrenheit(res.data.current.temp_f);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function onHobbitRouteClick() {
        setHobbitRoute(!hobbitRoute);
    }

    function onLegolasGimliRouteClick() {
        setDwarfRoute(!dwarfRoute);
    }

    function weatherDetailsMordor(){
        const map = useMapEvent("zoom", () => {
            map.setZoom(3);
            map.setZoomAround([30, 52], 3);
        });
        return null;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <p>Paths of:</p>
            <label>
                <Checkbox onClick={() => onHobbitRouteClick()} />
                Frodo & Sam
            </label>
            <label>
                <Checkbox onClick={() => onLegolasGimliRouteClick()} />
                Legolas & Gimli
            </label>
            <div
                style={{
                    margin: "0 auto",
                    width: "800px",
                    height: "500px",
                    textAlign: "center"
                }}
            >
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
                <div className={"weatherDiv"}>
                    <label onClick={()=>weatherDetailsMordor()}>
                            <a style={{color: "white"}}>The Shire: {temperatureShireCelsius}°C |{" "}
                                {temperatureShireFahrenheit}°F</a>
                    </label>
                    <br />
                    <label onClick={()=>weatherDetailsMordor()}>
                            <a style={{color: "white"}}>Mordor: {temperatureMordorCelsius}°C |{" "}
                                {temperatureMordorFahrenheit}°F</a>

                    </label>
                </div>
            </div>
        </div>
    );
}

export default Map;
