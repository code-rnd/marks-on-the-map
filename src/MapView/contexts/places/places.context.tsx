import { createContext } from "react";
import { MarkerCustomModel } from "../../components/MarkersCustom";

export const PlacesContext = createContext({
  places: [] as MarkerCustomModel[],
  setPlaces: (places: MarkerCustomModel[]) => {},
});
