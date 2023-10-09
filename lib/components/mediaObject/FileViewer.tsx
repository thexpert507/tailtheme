import { VscDebugRestart } from "react-icons/vsc";
import { AudioView } from "./AudioView";
import { HtmlView } from "./HtmlView";
import { PdfView } from "./PdfView";
import { ScriptView } from "./ScriptView";
import { ThreeView } from "./ThreeView";
import { TxtView } from "./TxtView";
import { VideoView } from "./VideoView";

interface FileViewerProps {
  filename: string;
  src: string;
  onClickRetry?: () => void;
}
export interface ViewProps {
  src: string;
}

const ImageView = ({ src }: ViewProps) => (
  <img src={src} alt="imageView" className="aspect-video w-full object-contain min-h-[170px]" />
);

const viewers: { [ext: string]: (props: ViewProps) => JSX.Element } = {
  png: ImageView,
  jpg: ImageView,
  jpeg: ImageView,
  svg: ImageView,
  gif: ImageView,
  mp3: AudioView,
  mpeg: AudioView,
  wav: AudioView,
  mp4: VideoView,
  webm: VideoView,
  pdf: PdfView,
  txt: TxtView,
  glb: ThreeView,
  html: HtmlView,
  js: ScriptView,
  gltf: ThreeView,
  "gltf-binary": ThreeView,
  m4v: VideoView,
  ogv: VideoView,
  ogg: AudioView,
  oga: AudioView,
};

export const FileViewer = ({ filename, src, onClickRetry }: FileViewerProps) => {
  const extension = filename.split(".").pop()?.toLowerCase() || "";
  const Viewer = viewers[extension];
  return Viewer ? (
    <Viewer src={src}></Viewer>
  ) : (
    <div className="flex items-center justify-center w-full object-contain aspect-video min-h-[170px] bg-gray-800 dark:bg-black text-white">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClickRetry && onClickRetry();
        }}
      >
        <VscDebugRestart size={25}></VscDebugRestart>
      </button>
    </div>
  );
};
