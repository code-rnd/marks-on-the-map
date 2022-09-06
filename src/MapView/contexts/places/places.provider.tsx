import { FC, ReactNode, useState } from "react";
import { MarkerCustomModel } from "../../components/MarkersCustom";
import { PlacesContext } from ".";

export const PlacesProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [places, setPlaces] = useState<MarkerCustomModel[]>([]);

  return (
    <PlacesContext.Provider value={{ places, setPlaces }}>
      {children}
    </PlacesContext.Provider>
  );
};
