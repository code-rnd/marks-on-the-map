import { FC, memo, useContext } from "react";
import { useMapEvents } from "react-leaflet";

import { CoordinatesContext } from "../../contexts";

export const MapEventHandler: FC = memo(() => {
  const { setCoordinates, setCenterCoordinates } =
    useContext(CoordinatesContext);

  useMapEvents({
    click({ latlng }) {
      const coordinates = { lat: latlng.lat, lng: latlng.lng };
      setCoordinates(coordinates);
    },
    dragend({ target }) {
      const center = target.getCenter();
      setCenterCoordinates(center);
    },
  });

  return null;
});
