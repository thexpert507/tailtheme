import { ROUNDED } from "@theme/utils";
import { createContext, useContext } from "react";

export interface MediaContextState {
  src: string;
  size?: { width: number | string; height: number | string };
  view3d?: { showControls?: boolean };
  round?: keyof typeof ROUNDED;
  file?: { size: number };
  rules?: { accept?: string; maxFiles?: number; maxSize?: number, openButtonText?: string };
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
