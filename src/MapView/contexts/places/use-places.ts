import { useContext } from "react";
import { PlacesContext } from "./places.context";

export const usePlaces = () => useContext(PlacesContext);
