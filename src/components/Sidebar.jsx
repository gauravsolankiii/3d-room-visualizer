import React, { useState } from "react";
import {
  products,
  layoutPatterns,
  groutSizes,
  groutColors,
  roomObjects,
} from "../data/roomData";

export default function Sidebar({
  activeTab,
  setActiveTab,
  selectedProduct,
  setSelectedProduct,
  selectedObject,
  setSelectedObject,
  layoutPattern,
  setLayoutPattern,
  angle,
  setAngle,
  groutSize,
  setGroutSize,
  groutColor,
  setGroutColor,
  isCollapsed,
  setIsCollapsed,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "▶" : "◀"}
      </button>

      <div className="sidebar-tabs">
        <button
          className={`tab ${activeTab === "product" ? "active" : ""}`}
          onClick={() => setActiveTab("product")}
        >
          Product
        </button>
        <button
          className={`tab ${activeTab === "layout" ? "active" : ""}`}
          onClick={() => setActiveTab("layout")}
        >
          Layout
        </button>
        <button
          className={`tab ${activeTab === "objects" ? "active" : ""}`}
          onClick={() => setActiveTab("objects")}
        >
          Objects
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "product" && (
          <div>
            <h3 className="section-title">Select Productsssss</h3>

            <input
              type="text"
              className="search-box"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="filter-dropdown"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`product-card ${
                    selectedProduct?.id === product.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div
                    className="product-image"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.texture}
                  </div>
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-code">{product.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "layout" && (
          <div>
            <h3 className="section-title">Layout Pattern</h3>

            <div className="layout-patterns">
              {layoutPatterns.map((pattern) => (
                <button
                  key={pattern.id}
                  className={`pattern-btn ${
                    layoutPattern === pattern.id ? "active" : ""
                  }`}
                  onClick={() => setLayoutPattern(pattern.id)}
                >
                  <span className="pattern-icon">{pattern.icon}</span>
                  <span>{pattern.name}</span>
                </button>
              ))}
            </div>

            <div className="angle-control">
              <label className="angle-label">Laying Angle: {angle}°</label>
              <input
                type="range"
                className="angle-slider"
                min="0"
                max="180"
                step="45"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
              />
              <div className="angle-value">{angle}°</div>
            </div>

            <div className="grout-controls">
              <h3 className="section-title">Grout Settings</h3>

              <div className="grout-size-control">
                <label className="angle-label">Grout Size</label>
                <div className="grout-size-selector">
                  {groutSizes.map((size) => (
                    <button
                      key={size.id}
                      className={`grout-size-btn ${
                        groutSize?.id === size.id ? "active" : ""
                      }`}
                      onClick={() => setGroutSize(size)}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grout-color-control">
                <label className="angle-label">Grout Color</label>
                <div className="color-picker-wrapper">
                  {groutColors.map((color) => (
                    <div
                      key={color.id}
                      className={`color-option ${
                        groutColor?.id === color.id ? "selected" : ""
                      }`}
                      style={{ backgroundColor: color.color }}
                      onClick={() => setGroutColor(color)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "objects" && (
          <div>
            <h3 className="section-title">Select Object to Apply</h3>

            <div className="object-list">
              {roomObjects.map((obj) => (
                <div
                  key={obj.id}
                  className={`object-item ${
                    selectedObject === obj.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedObject(obj.id)}
                >
                  <div className="object-preview">{obj.icon}</div>
                  <div className="object-details">
                    <div className="object-title">{obj.name}</div>
                    <div className="object-description">{obj.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
