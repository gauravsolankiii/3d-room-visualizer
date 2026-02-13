import React from 'react';
import { rooms } from '../data/roomData';

export default function RoomSelector({ isOpen, onClose, onSelectRoom, currentRoom }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '10px',
        padding: '30px',
        maxWidth: '600px',
        width: '90%',
      }}>
        <h2 style={{
          marginBottom: '20px',
          fontSize: '24px',
          color: '#333',
        }}>Select Room</h2>
        
        <div className="room-selector">
          {rooms.map(room => (
            <button
              key={room.id}
              className={`room-btn ${currentRoom === room.model ? 'active' : ''}`}
              onClick={() => {
                onSelectRoom(room.model);
                onClose();
              }}
            >
              {room.name}
            </button>
          ))}
        </div>

        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#e0e0e0',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
