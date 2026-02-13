import React from 'react';

export default function Header({ onSelectRoom, onSaveDesign, onReset }) {
  return (
    <div className="header">
      <div className="logo">3D Room Visualizer</div>
      <div className="header-actions">
        <button className="header-btn" onClick={onSelectRoom}>
          Select Room
        </button>
        <button className="header-btn" onClick={onSaveDesign}>
          Save Design
        </button>
        <button className="header-btn" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
