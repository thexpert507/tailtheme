import { useMediaContext } from "./mediaContext";

export const PdfView = () => {
  const { src } = useMediaContext();
  return (
    <div className="aspect-video w-full object-cover min-h-[170px]">
      <iframe src={src} title="pdf" className="w-full h-full"></iframe>
    </div>
  );
};
