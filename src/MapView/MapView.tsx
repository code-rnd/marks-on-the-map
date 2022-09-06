import { FC, memo, useState } from "react";

import "./MapView.scss";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { MarkerCustomModel, MarkersCustom } from "./components/MarkersCustom";
import { NavBar } from "./components/NavBar";
import { MapEventHandler } from "./utils";
import { CoordinatesContext } from "./contexts";
import { CoordinatesModel } from "./models/coordinates.model";
import {
  initialCoordinatesConst,
  positionMocked,
  urlMAP,
  zoomParamsMap,
} from "./constants";
import { TopBar } from "./components/TopBar";
import { Icon } from "./components/Icon";
import { PlacesContext } from "./contexts/places";
import { ModalFormPlace } from "./components/ModalFormPlace";

export const MapView: FC = memo(() => {
  const [currentCoords, setCurrentCoords] = useState<CoordinatesModel>(
    initialCoordinatesConst
  );
  const [centerCoordinates, setCenterCoordinates] = useState<CoordinatesModel>(
    initialCoordinatesConst
  );

  const [places, setPlaces] = useState<MarkerCustomModel[]>([]);

  const [zoom, setZoom] = useState(zoomParamsMap);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <TopBar title={isEditMode ? "Укажите меткой на объект" : "Карты"} />

      <CoordinatesContext.Provider
        value={{
          coordinates: currentCoords,
          setCoordinates: setCurrentCoords,
          centerCoordinates,
          setCenterCoordinates,
          zoom,
          setZoom,
        }}
      >
        <PlacesContext.Provider value={{ places, setPlaces }}>
          <MapContainer
            center={positionMocked as any}
            zoom={zoom}
            scrollWheelZoom={false}
            tap={false}
          >
            <TileLayer url={urlMAP} />
            <MarkersCustom places={places} />
            <MapEventHandler />
            {isEditMode && (
              <Icon
                name="geo-add"
                className="centerMarker"
                fill="black"
                height={50}
                width={50}
              />
            )}
          </MapContainer>

          <NavBar
            isEditMode={isEditMode}
            handleAdd={() => setIsEditMode((prev) => !prev)}
          />

          {isEditMode && (
            <ModalFormPlace onClose={() => setIsEditMode(false)} />
          )}
        </PlacesContext.Provider>
      </CoordinatesContext.Provider>
    </>
  );
});
