import { FC, ReactNode, useState } from "react";
import { CoordinatesContext } from ".";
import { CoordinatesModel } from "../../models/coordinates.model";
import { initialCoordinatesConst, zoomParamsMap } from "../../constants";

export const CoordinatesProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [currentCoords, setCurrentCoords] = useState<CoordinatesModel>(
    initialCoordinatesConst
  );
  const [centerCoordinates, setCenterCoordinates] = useState<CoordinatesModel>(
    initialCoordinatesConst
  );
  const [zoom, setZoom] = useState(zoomParamsMap);

  return (
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
      {children}
    </CoordinatesContext.Provider>
  );
};
