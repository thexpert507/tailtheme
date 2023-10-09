import { ViewProps } from "./FileViewer";

export const VideoView = ({ src }: ViewProps) => {
  return (
    <video src={src} controls className="aspect-video w-full object-cover min-h-[170px]"></video>
  );
};
