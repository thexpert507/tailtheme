import { VscDebugRestart } from "react-icons/vsc";
import { AudioView } from "./AudioView";
import { HtmlView } from "./HtmlView";
import { PdfView } from "./PdfView";
import { ScriptView } from "./ScriptView";
import { ThreeView } from "./ThreeView";
import { TxtView } from "./TxtView";
import { VideoView } from "./VideoView";
import { MediaContextProvider, MediaContextState, useMediaContext } from "./mediaContext";
import { twMerge } from "tailwind-merge";
import { ROUNDED } from "@theme/utils";

interface FileViewerProps extends MediaContextState {
  filename: string;
  onClickRetry?: () => void;
}

function ImageView() {
  const { src, size, round } = useMediaContext();
  return (
    <img
      style={{ ...size }}
      src={src}
      alt="imageView"
      className={twMerge(
        "aspect-video w-full object-contain min-h-[170px]",
        round ? ROUNDED[round] : ROUNDED.none
      )}
    />
  );
}

const viewers: { [ext: string]: () => JSX.Element } = {
  png: () => <ImageView />,
  jpg: () => <ImageView />,
  jpeg: () => <ImageView />,
  svg: () => <ImageView />,
  gif: () => <ImageView />,
  mp3: () => <AudioView />,
  mpeg: () => <AudioView />,
  wav: () => <AudioView />,
  mp4: () => <VideoView />,
  webm: () => <VideoView />,
  pdf: () => <PdfView />,
  txt: () => <TxtView />,
  glb: () => <ThreeView />,
  html: () => <HtmlView />,
  js: () => <ScriptView />,
  gltf: () => <ThreeView />,
  "gltf-binary": () => <ThreeView />,
  m4v: () => <VideoView />,
  ogv: () => <VideoView />,
  ogg: () => <AudioView />,
  oga: () => <AudioView />,
};

export const FileViewer = (props: FileViewerProps) => {
  const { filename, onClickRetry, ...state } = props;

  const extension = filename.split(".").pop()?.toLowerCase() || "";
  const Viewer = viewers[extension];

  return Viewer ? (
    <MediaContextProvider value={state}>
      <Viewer></Viewer>
    </MediaContextProvider>
  ) : (
    <div className="flex items-center justify-center w-full object-contain aspect-video min-h-[170px] bg-gray-800 dark:bg-black text-white">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClickRetry && onClickRetry();
        }}>
        <VscDebugRestart size={25}></VscDebugRestart>
      </button>
    </div>
  );
};
