import { FC, memo, useState } from "react";

import "./MapView.scss";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { MarkersCustom } from "./components/MarkersCustom";
import { NavBar } from "./components/NavBar";
import { MapEventHandler } from "./utils";
import { CoordinatesProvider } from "./contexts";
import { positionMocked, urlMAP } from "./constants";
import { TopBar } from "./components/TopBar";
import { Icon } from "./components/Icon";
import { ModalFormPlace } from "./components/ModalFormPlace";
import { PlacesProvider } from "./contexts/places";

export const MapView: FC = memo(() => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <TopBar title={isEditMode ? "Укажите меткой на объект" : "Карты"} />
      <CoordinatesProvider>
        <PlacesProvider>
          <MapContainer
            center={positionMocked as any}
            zoom={18}
            scrollWheelZoom={false}
            tap={false}
          >
            <TileLayer url={urlMAP} />
            <MarkersCustom />
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
        </PlacesProvider>
      </CoordinatesProvider>
    </>
  );
});
