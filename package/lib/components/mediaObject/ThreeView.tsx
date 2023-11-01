import { Canvas, Vector3, useFrame, useThree } from "@react-three/fiber";
import { Fragment, Suspense, useEffect, useRef } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  useProgress,
  Html,
  PerformanceMonitor,
  useAspect,
  CubeCamera,
} from "@react-three/drei";
import { Gltf } from "@react-three/drei";
import { useMediaContext } from "./mediaContext";
import { twMerge } from "tailwind-merge";
import { Box, Button } from "..";
import { VscArrowDown } from "react-icons/vsc";
import { Memo, useObservable } from "@legendapp/state/react";
import {
  Box3,
  PerspectiveCamera as Camera,
  Group,
  Mesh,
  Object3D,
  Vector3 as ThreeVector3,
} from "three";
import { ROUNDED } from "@theme/utils";
import { MediaContextState } from "./mediaContext";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}%</Html>;
}

interface ModelProps {
  src: string;
  size: MediaContextState["size"];
}
const Model = (props: ModelProps) => {
  const ref = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.5;
  });

  const aspect = useAspect(
    Number(props.size?.width || 200) + 200, // Pixel-width
    Number(props.size?.height || 200) + 200, // Pixel-height
    undefined // Optional scaling factor
  );

  // const { scene } = useThree();

  useEffect(() => {
    if (!ref.current) return;
    const obj = ref.current as Object3D;
    const box = new Box3().setFromObject(obj);

    const bounds = {
      x: box.max.x - box.min.x,
      y: box.max.y - box.min.y,
      z: box.max.z - box.min.z,
    };

    // Env es el tamaño del canvas
    const env = {
      x: Number(props.size?.width || 200),
      y: Number(props.size?.height || 200),
      z: Number(props.size?.width || 200),
    };

    const lengthRatios = [env.x / bounds.x, env.y / bounds.y, env.z / bounds.z];

    const min = Math.min(...lengthRatios); // Escalar el objeto
    const scalar = min * 0.065;
    obj.scale.set(scalar, scalar, scalar);
    console.log({ scalar });

    obj.translateY(-((bounds.y * scalar) / 2)); // Centrar el objeto
  }, [ref, props.size]);

  return <Gltf ref={ref} src={props.src} receiveShadow castShadow position={[0, 0, 0]} />;
};

export const ThreeView = () => {
  const { size, src, view3d, round } = useMediaContext();
  const ref = useRef<Camera>(null);

  const state = useObservable({
    position: [1, 1, 10] as Vector3,
    dpr: 1.5,
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

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-around bg-gray-100 dark:bg-stone-950 overflow-hidden",
        !size ? "absolute top-0 left-0 right-0 bottom-0" : "relative",
        round ? ROUNDED[round] : ROUNDED.none
      )}
      style={size && { width: size.width, height: size.height }}>
      <Fragment>
        <Memo>
          {() => {
            const { position, dpr } = state.get();
            return (
              <Canvas
                dpr={dpr}
                frameloop="demand"
                className="bg-gray-100 dark:bg-stone-950"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                camera={{ position, fov: 75 }}>
                <PerformanceMonitor
                  onIncline={() => state.dpr.set(2)}
                  onDecline={() => state.dpr.set(1)}>
                  <pointLight position={[-5, 10, -10]} intensity={2} />
                  <ambientLight></ambientLight>
                  <directionalLight intensity={2} position={[0, 0, 70]}></directionalLight>
                  <Suspense fallback={<Loader />}>
                    <Model src={src} size={size}></Model>
                  </Suspense>
                  <OrbitControls makeDefault />
                </PerformanceMonitor>
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
    </div>
  );
};
