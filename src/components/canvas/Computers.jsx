import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "../Loader";

const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listen if screen size is small or below 500px
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //set the isMobile variable with the initial size
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const computer = useGLTF("/public/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-3, 2, 1]}
        angle={1}
        penumbra={1}
        intensity={6}
        castShadow
        shadow-mapSize={1024}
        decay={false}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2.5, -1.2] : [0, -3.35, -1.5]}
        rotation={[-0.01, 0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
