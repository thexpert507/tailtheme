import axios from "axios";
import { useEffect, useRef } from "react";
import { ViewProps } from "./FileViewer";

export const TxtView = ({ src }: ViewProps) => {
  const preRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const getText = async () => {
      const response = await axios(src);
      preRef.current && (preRef.current.innerText = response.data);
    };
    getText();
  }, [src]);
  return (
    <div className="w-96 flex flex-col items-center justify-around bg-black rounded-t-xl aspect-square">
      <div
        className="text-white w-full h-full p-2 text-justify text-clip inline overflow-y-auto"
        ref={preRef}
      ></div>
    </div>
  );
};
