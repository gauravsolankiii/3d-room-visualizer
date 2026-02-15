import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Center,
  useTexture,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";
import Loader from "./components/Loader";

// ---------- Fix Materials like 3DViewer ----------
function FixMaterials({ scene }) {
  const { gl, scene: threeScene } = useThree();

  useEffect(() => {
    // PMREM like 3dviewer
    const pmrem = new THREE.PMREMGenerator(gl);
    pmrem.compileEquirectangularShader();

    new THREE.TextureLoader().load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr",
      (hdr) => {
        const envMap = pmrem.fromEquirectangular(hdr).texture;
        threeScene.environment = envMap;

        scene.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.envMap = envMap;
            child.material.envMapIntensity = 2.2;
            child.material.needsUpdate = true;
          }
        });
      }
    );
  }, [gl, scene, threeScene]);

  return null;
}

// ---------- Model ----------
function Model({ onTextureApply, loadTexture, appliedTextures }) {
  const { scene } = useGLTF("/models/room.glb");
  const processedMaterials = useRef(new Set());

  const handleClick = (e) => {
    e.stopPropagation();
    const mesh = e.intersections[0].object;

    if (mesh.isMesh && mesh.name !== "textures114") {
      const materialId = mesh.uuid;

      console.log(processedMaterials, mesh.uuid, "processedMaterials");
      if (processedMaterials.current.has(materialId)) {
        console.log("gone");
        return;
      }

      const loader = new THREE.TextureLoader();

      loader.load("/textures/marble.jpg", (texture) => {
        if (mesh.material.map) {
          mesh.material.map.dispose();
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        const size = new THREE.Vector3();
        mesh.geometry.boundingBox.getSize(size);

        if (size.y < 1) {
          texture.repeat.set(size.x / 5, size.x / 5);
        }
        mesh.material = new THREE.MeshBasicMaterial({
          map: texture,
        });
        mesh.material.needsUpdate = true;
        processedMaterials.current.add(materialId);
      });
    }
  };

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
      }
    });
  }, [scene, onTextureApply, loadTexture, appliedTextures]);

  return (
    <>
      <primitive object={scene} onClick={handleClick} />
      <FixMaterials scene={scene} />
    </>
  );
}

function ControlsWithLogger() {
  const { camera } = useThree();
  const controlsRef = useRef();

  const handleChange = () => {
    console.log("Camera Position:", camera.position);
    console.log("Camera Rotation:", camera.rotation);
  };

  return (
    <OrbitControls ref={controlsRef} enableDamping onChange={handleChange} />
  );
}

useGLTF.preload("/models/room.glb");

// ---------- App ----------
export default function App() {
  const [appliedTextures, setAppliedTextures] = useState(new Set());
  const textureCache = useRef(new Map());

  const handleTextureApply = (materialId, texturePath) => {
    // Check if texture already applied to this material
    console.log("gone ");
    const key = `${materialId}-${texturePath}`;

    if (appliedTextures.has(key)) {
      console.log(`Texture already applied to ${materialId}, skipping...`);
      return false; // Already applied, skip
    }

    // Add to applied textures
    setAppliedTextures((prev) => new Set([...prev, key]));
    console.log(`Applying texture to ${materialId}...`);
    return true; // Proceed with application
  };

  const loadTexture = (path) => {
    // Check cache first
    if (textureCache.current.has(path)) {
      console.log(`Using cached texture: ${path}`);
      return textureCache.current.get(path);
    }

    // Load new texture
    const loader = new THREE.TextureLoader();
    const texture = loader.load(path);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    // Cache it
    textureCache.current.set(path, texture);
    console.log(`Loaded and cached texture: ${path}`);

    return texture;
  };

  const resetTextures = () => {
    setAppliedTextures(new Set());
    textureCache.current.clear();
    console.log("All textures reset!");
  };

  return (
    <div className="app-container">
      <div
        style={{ height: "100vh", background: "black", position: "relative" }}
      >
        {/* Texture Preview */}
        <img
          src="/textures/marble.jpg"
          alt="preview"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 120,
            height: 120,
            objectFit: "cover",
            borderRadius: 8,
            border: "2px solid white",
            zIndex: 10,
          }}
        />

        {/* Reset Button */}
        <button
          onClick={resetTextures}
          style={{
            position: "absolute",
            top: 150,
            right: 20,
            padding: "10px 20px",
            background: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
            zIndex: 10,
          }}
        >
          Reset Textures
        </button>

        {/* Applied Count */}
        <div
          style={{
            position: "absolute",
            top: 200,
            right: 20,
            color: "white",
            background: "rgba(0,0,0,0.7)",
            padding: "10px",
            borderRadius: 6,
            fontSize: 14,
            zIndex: 10,
          }}
        >
          Applied: {appliedTextures.size}
        </div>

        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 25, 55], fov: 55 }}
          shadows={true}
          gl={{
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.0,
            physicallyCorrectLights: true,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Center>
              <Environment preset="apartment" background={false} />
              <Model
                onTextureApply={handleTextureApply}
                loadTexture={loadTexture}
                appliedTextures={appliedTextures}
              />
              <Preload all />
              <ControlsWithLogger />
            </Center>
          </Suspense>

          {/* Better lighting setup to remove artifacts */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[50, 100, 50]}
            intensity={1.0}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0001}
          />

          <directionalLight position={[-30, 50, -30]} intensity={0.4} />

          <OrbitControls enableDamping dampingFactor={0.05} />
        </Canvas>
      </div>
    </div>
  );
}
