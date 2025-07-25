import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");

  useFrame(() => {
    scene.rotation.y += 0.001;
  });

  return <primitive object={scene} scale={2.5} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <OrbitControls autoRotate enableZoom={false} />
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;
