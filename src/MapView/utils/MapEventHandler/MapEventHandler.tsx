import { FC, memo } from "react";
import { useMapEvents } from "react-leaflet";

import { useCoordinates } from "../../contexts";

export const MapEventHandler: FC = memo(() => {
  const { setCoordinates, setCenterCoordinates, setZoom } = useCoordinates();

  useMapEvents({
    click({ latlng }) {
      const coordinates = { lat: latlng.lat, lng: latlng.lng };
      setCoordinates(coordinates);
    },
    zoom(event) {
      setZoom(event.target.getZoom());
    },
    dragend({ target }) {
      const center = target.getCenter();
      setCenterCoordinates(center);
    },
  });

  return null;
});
