import { useContext } from "react";
import { CoordinatesContext } from "./coordinates.context";

export const useCoordinates = () => useContext(CoordinatesContext);
