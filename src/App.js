import React, { useState } from "react";
import "./App.css";
import { products, groutSizes, groutColors } from "./data/roomData";
import GLBViewer from "./components/GLBViewer";

function App() {
  // State management
  const [activeTab, setActiveTab] = useState("product");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedObject, setSelectedObject] = useState("floor");
  const [layoutPattern, setLayoutPattern] = useState("standard");
  const [angle, setAngle] = useState(0);
  const [groutSize, setGroutSize] = useState(groutSizes[1]);
  const [groutColor, setGroutColor] = useState(groutColors[1]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [roomModel, setRoomModel] = useState("room.glb");
  const [showRoomSelector, setShowRoomSelector] = useState(false);

  // Handle object click in 3D scene
  const handleObjectClick = (objectName) => {
    setSelectedObject(objectName);
    setActiveTab("objects");
  };

  // Handle save design
  const handleSaveDesign = () => {
    alert("Design saved! (This would trigger actual save functionality)");
  };

  // Handle reset
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all settings?")) {
      setSelectedProduct(products[0]);
      setSelectedObject("floor");
      setLayoutPattern("standard");
      setAngle(0);
      setGroutSize(groutSizes[1]);
      setGroutColor(groutColors[1]);
    }
  };

  return (
    <div className="app-container">
      <GLBViewer />
    </div>
  );
}

export default App;
