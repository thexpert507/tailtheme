import { useMediaContext } from "./mediaContext";

export const HtmlView = () => {
  const {  src } = useMediaContext();
  return (
    <div className="w-full h-60 flex flex-col items-center justify-around bg-gray-100 rounded-t-xl aspect-square">
      <iframe
        src={src}
        title={src}
        sandbox="allow-scripts allow-same-origin"
        className="w-full h-full rounded-t-xl"></iframe>
    </div>
  );
};