import { Canvas, Vector3 } from "@react-three/fiber";
import { Fragment, Suspense, useId, useRef } from "react";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useMediaContext } from "./mediaContext";
import { twMerge } from "tailwind-merge";
import { Box, Button } from "..";
import { VscArrowDown } from "react-icons/vsc";
import { SiThreedotjs } from "react-icons/si";
import { Memo, Show, useObservable, useObserve } from "@legendapp/state/react";
import { PerspectiveCamera as Camera } from "three";
import { batch, observable } from "@legendapp/state";
import { ROUNDED } from "@theme/utils";

// Solo se puede abrir un archivo 3d a la vez

const current3dView$ = observable<string>();

const Model = ({ src }: { src: string }) => {
  const { scene } = useGLTF(src);
  return <primitive object={scene}></primitive>;
};

export const ThreeView = () => {
  const { size, src, view3d, round } = useMediaContext();
  const ref = useRef<Camera>(null);
  const id = useId();

  const state = useObservable({
    position: [10, 10, 0] as Vector3,
    show: false,
  });

  useObserve(() => {
    const active3dView = current3dView$.get();
    if (active3dView !== id) {
      state.show.set(false);
    }
  });

  const handleToBottom = () => {
    const camera = ref.current;
    if (!camera) return;
    camera.position.setY(camera.position.y + 1);
  };

  const handleToTop = () => {
    const camera = ref.current;
    if (!camera) return;
    camera.position.setY(camera.position.y - 1);
  };

  const handleToRight = () => {
    const camera = ref.current;
    if (!camera) return;
    camera.position.setX(camera.position.x + 1);
  };

  const handleToLeft = () => {
    const camera = ref.current;
    if (!camera) return;
    camera.position.setX(camera.position.x - 1);
  };

  const handleShow = () => {
    state.show.set(true);
    current3dView$.set(id);
  };

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-around bg-gray-100 dark:bg-stone-950 overflow-hidden",
        !size ? "absolute top-0 left-0 right-0 bottom-0" : "relative",
        round ? ROUNDED[round] : ROUNDED.none
      )}
      style={size && { width: size.width, height: size.height }}>
      <Show
        if={state.show}
        else={
          <Button onClick={handleShow} variant="contained" round={round}>
            {view3d?.openButtonText || "Open"} <SiThreedotjs />
          </Button>
        }>
        {() => (
          <Fragment>
            <Memo>
              {() => {
                const { position } = state.get();
                return (
                  <Canvas>
                    <PerspectiveCamera ref={ref} makeDefault position={position} fov={10} />
                    <pointLight position={[-5, 10, -10]} intensity={2} />
                    <Suspense fallback={null}>
                      <ambientLight></ambientLight>
                      <directionalLight intensity={2} position={[0, 0, 70]}></directionalLight>
                      <Model src={src}></Model>
                    </Suspense>
                    <OrbitControls></OrbitControls>
                  </Canvas>
                );
              }}
            </Memo>
            {view3d?.showControls && (
              <div className="absolute bottom-0 right-0">
                <Box gap="none">
                  <Button stopPropagation onClick={handleToBottom} variant="contained" size="2xs">
                    <VscArrowDown />
                  </Button>
                  <Button stopPropagation onClick={handleToTop} variant="contained" size="2xs">
                    <VscArrowDown className="transform rotate-180" />
                  </Button>
                  <Button stopPropagation onClick={handleToRight} variant="contained" size="2xs">
                    <VscArrowDown className="transform rotate-90" />
                  </Button>
                  <Button stopPropagation onClick={handleToLeft} variant="contained" size="2xs">
                    <VscArrowDown className="transform -rotate-90" />
                  </Button>
                </Box>
              </div>
            )}
          </Fragment>
        )}
      </Show>
    </div>
  );
};
