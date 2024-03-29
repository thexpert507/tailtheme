import axios from "axios";
import { useEffect, useRef } from "react";
import { useMediaContext } from "./mediaContext";

export const TxtView = () => {
  const { src } = useMediaContext();
  const preRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const getText = async () => {
      const response = await axios(src);
      preRef.current && (preRef.current.innerText = response.data);
    };
    getText();
  }, [src]);
  return (
    <div className="w-96 flex flex-col items-center justify-around bg-background-secondary rounded-t-xl aspect-square">
      <div
        className="text-background-contrast w-full h-full p-2 text-justify text-clip inline overflow-y-auto"
        ref={preRef}></div>
    </div>
  );
};
