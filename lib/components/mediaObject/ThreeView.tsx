import { ViewProps } from "./FileViewer";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ src }: ViewProps) => {
  const { scene } = useGLTF(src);
  return <primitive object={scene}></primitive>;
};

export const ThreeView = ({ src }: ViewProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-around bg-gray-100 rounded-t-xl">
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
