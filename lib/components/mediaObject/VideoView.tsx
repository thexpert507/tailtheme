import { useMediaContext } from "./mediaContext";

export const VideoView = () => {
  const { src } = useMediaContext();
  return (
    <video src={src} controls className="aspect-video w-full object-cover min-h-[170px]"></video>
  );
};
