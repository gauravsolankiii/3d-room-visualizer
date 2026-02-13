import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Room3D from "./Room3D";
import * as THREE from "three";
import {
  ContactShadows,
  Bounds,
  OrbitControls,
  Environment,
} from "@react-three/drei";

export default function Scene({
  roomModel,
  selectedObject,
  selectedProduct,
  layoutPattern,
  angle,
  groutSize,
  groutColor,
  onObjectClick,
}) {
  return (
    <div
      className="canvas-container"
      style={{ width: "100%", height: "100vh" }}
    >
      <Canvas shadows camera={{ fov: 50, near: 0.5, far: 5000 }}>
        <Suspense fallback={null}>
          {/* ✅ Lights yahan honge */}
          <ambientLight intensity={0.35} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          {/* ✅ HDR */}
          {/* <Environment files="studio.hdr" background /> */}

          {/* ✅ Auto fit camera */}
          <Bounds fit clip observe margin={1.8}>
            <Room3D
              roomModel={roomModel}
              selectedObject={selectedObject}
              selectedProduct={selectedProduct}
              layoutPattern={layoutPattern}
              angle={angle}
              groutSize={groutSize}
              groutColor={groutColor}
              onObjectClick={onObjectClick}
            />
          </Bounds>

          {/* ✅ Contact shadow */}
          {/* <ContactShadows
            position={[0, -1, 0]}
            opacity={0.6}
            scale={20}
            blur={2}
          /> */}

          <OrbitControls minDistance={15} maxDistance={200} enableDamping />
        </Suspense>
      </Canvas>

      <div className="bottom-controls">
        <button className="control-btn" title="Rotate View">
          🔄
        </button>
        <button className="control-btn" title="Zoom In">
          🔍+
        </button>
        <button className="control-btn" title="Fullscreen">
          ⛶
        </button>
      </div>
    </div>
  );
}
