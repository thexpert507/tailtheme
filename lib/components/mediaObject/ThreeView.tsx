import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMediaContext } from "./mediaContext";
import { twMerge } from "tailwind-merge";

const Model = ({ src }: { src: string }) => {
  const { scene } = useGLTF(src);
  return <primitive object={scene}></primitive>;
};

export const ThreeView = () => {
  const { size, src } = useMediaContext();
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-around bg-gray-100 rounded-t-xl",
        !size ? "absolute top-0 left-0 right-0 bottom-0" : "relative"
      )}
      style={size && { width: size.width, height: size.height }}>
      <Canvas camera={{ position: [10, 10, 0], fov: 70 }}>
        <pointLight position={[-5, 10, -10]} intensity={2} />
        <Suspense fallback={null}>
          <ambientLight></ambientLight>
          <directionalLight intensity={2} position={[0, 0, 70]}></directionalLight>
          <Model src={src}></Model>
        </Suspense>
        <OrbitControls></OrbitControls>
      </Canvas>
    </div>
  );
};
