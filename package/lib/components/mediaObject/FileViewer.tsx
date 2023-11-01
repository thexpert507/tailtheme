import { VscDebugRestart } from "react-icons/vsc";
import { SiThreedotjs } from "react-icons/si";
import { MdOutlineBrokenImage } from "react-icons/md";
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
import { Show, useObservable } from "@legendapp/state/react";
import { Box, Button } from "..";
import { format } from "bytes";

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

  return Boolean(Viewer) && state.src ? (
    <MediaContextProvider value={state}>
      <MaxFileSize>
        <Viewer></Viewer>
      </MaxFileSize>
    </MediaContextProvider>
  ) : (
    <div
      style={{ ...state.size }}
      className={twMerge(
        "flex items-center justify-center bg-gray-100 dark:bg-stone-950",
        state.round ? ROUNDED[state.round] : ROUNDED.none
      )}>
      {!state.src ? (
        <Button size="xl" round={state.round} variant="text" stopPropagation preventDefault>
          <MdOutlineBrokenImage size={35} />
        </Button>
      ) : (
        <Button
          round={state.round}
          variant="text"
          stopPropagation
          preventDefault
          onClick={onClickRetry}>
          <VscDebugRestart size={25}></VscDebugRestart>
        </Button>
      )}
    </div>
  );
};

interface MaxFileSizeProps {
  children: React.ReactNode;
}
function MaxFileSize(props: MaxFileSizeProps) {
  const { file, ...state } = useMediaContext();
  const show$ = useObservable<boolean>(() =>
    file?.size ? file?.size < (state.rules?.maxSize || 50 * 1024 * 1024) : true
  );

  const handleShow = () => show$.set(true);

  return (
    <Show
      if={show$}
      else={
        <div
          style={{ ...state.size }}
          className={twMerge(
            "w-full h-full bg-gray-100 dark:bg-stone-950",
            state.round ? ROUNDED[state.round] : ROUNDED.none
          )}>
          <Box full height="h-full" items="center" justify="center">
            <Button stopPropagation onClick={handleShow} variant="contained" round={state.round}>
              {state.rules?.openButtonText || "Open"} {format(file?.size!)} <SiThreedotjs />
            </Button>
          </Box>
        </div>
      }>
      {props.children}
    </Show>
  );
}
