import { createContext } from "react";
import { CoordinatesModel } from "../../models/coordinates.model";

export const CoordinatesContext = createContext({
  coordinates: {} as CoordinatesModel,
  setCoordinates: (params: CoordinatesModel) => {},

  centerCoordinates: {} as CoordinatesModel,
  setCenterCoordinates: (params: CoordinatesModel) => {},

  zoom: 0,
  setZoom: ({}: any) => {},
});
