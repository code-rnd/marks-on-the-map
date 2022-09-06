import { FC, useCallback } from "react";
import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import { usePlaces } from "../../contexts/places";

export interface MarkerCustomModel {
  id: number;
  title: string;
  position: any[];
}
export const MarkersCustom: FC = () => {
  const { places } = usePlaces();
  const handleClick = useCallback((place: MarkerCustomModel) => {
    console.log(place);
  }, []);
  return (
    <>
      {places.map(({ title, position, id }, index) => (
        <Marker
          title={title}
          position={position as any}
          icon={icon({ iconUrl: iconMarker })}
          key={id + "_" + index}
        >
          <Popup>
            <div onClick={() => handleClick({ title, position, id })}>
              click me
            </div>
            {title}. <br /> Описание локации
          </Popup>
        </Marker>
      ))}
    </>
  );
};
