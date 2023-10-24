import { createContext, useContext } from "react";

export interface MediaContextState {
  src: string;
  size?: { width: number | string; height: number | string };
}

const MediaContext = createContext<MediaContextState | null>(null);

export function useMediaContext() {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error("useMediaContext must be used within a MediaContextProvider");
  }
  return context;
}

export const MediaContextProvider = MediaContext.Provider;
