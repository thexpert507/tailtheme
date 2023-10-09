import { ViewProps } from "./FileViewer";

export const PdfView = ({ src }: ViewProps) => {
  return (
    <div className="aspect-video w-full object-cover min-h-[170px]">
      <iframe src={src} title="pdf" className="w-full h-full"></iframe>
    </div>
  );
};
