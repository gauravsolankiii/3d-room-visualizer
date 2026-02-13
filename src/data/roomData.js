export const rooms = [
  { id: "bedroom", name: "Bedroom", model: "bedroom.glb" },
  { id: "living", name: "Living Room", model: "living.glb" },
  { id: "kitchen", name: "Kitchen", model: "kitchen.glb" },
  { id: "office", name: "Office", model: "office.glb" },
];

export const products = [
  {
    id: "p1",
    name: "Oak Wood Laminate",
    code: "OAK-001",
    category: "wood",
    color: "#8B7355",
    texture: "wood-oak",
  },
  {
    id: "p2",
    name: "Walnut Laminate",
    code: "WAL-002",
    category: "wood",
    color: "#6B4423",
    texture: "wood-walnut",
  },
  {
    id: "p3",
    name: "White Marble",
    code: "MAR-003",
    category: "marble",
    color: "#F5F5F5",
    texture: "marble-white",
  },
  {
    id: "p4",
    name: "Black Granite",
    code: "GRA-004",
    category: "granite",
    color: "#2C2C2C",
    texture: "granite-black",
  },
  {
    id: "p5",
    name: "Teak Wood",
    code: "TEK-005",
    category: "wood",
    color: "#B8860B",
    texture: "wood-teak",
  },
  {
    id: "p6",
    name: "Grey Marble",
    code: "MAR-006",
    category: "marble",
    color: "#A9A9A9",
    texture: "marble-grey",
  },
  {
    id: "p7",
    name: "Cherry Wood",
    code: "CHE-007",
    category: "wood",
    color: "#8E3A3A",
    texture: "wood-cherry",
  },
  {
    id: "p8",
    name: "Beige Stone",
    code: "STO-008",
    category: "stone",
    color: "#D2B48C",
    texture: "stone-beige",
  },
];

export const layoutPatterns = [
  { id: "standard", name: "Standard", icon: "▦" },
  { id: "chess", name: "Chess", icon: "▥" },
  { id: "horizontal", name: "Horizontal", icon: "▤" },
  { id: "vertical", name: "Vertical", icon: "▥" },
];

export const groutSizes = [
  { id: "s1", name: "1mm", value: 0.001 },
  { id: "s2", name: "2mm", value: 0.002 },
  { id: "s3", name: "3mm", value: 0.003 },
  { id: "s4", name: "4mm", value: 0.004 },
];

export const groutColors = [
  { id: "white", name: "White", color: "#FFFFFF" },
  { id: "grey", name: "Grey", color: "#808080" },
  { id: "black", name: "Black", color: "#000000" },
  { id: "beige", name: "Beige", color: "#D4C5B0" },
];

export const roomObjects = [
  {
    id: "floor",
    name: "Floor",
    description: "Room flooring",
    type: "surface",
    icon: "🔲",
  },
  {
    id: "wall-1",
    name: "Wall 1",
    description: "North wall",
    type: "surface",
    icon: "🧱",
  },
  {
    id: "wall-2",
    name: "Wall 2",
    description: "South wall",
    type: "surface",
    icon: "🧱",
  },
  {
    id: "wall-3",
    name: "Wall 3",
    description: "East wall",
    type: "surface",
    icon: "🧱",
  },
  {
    id: "wall-4",
    name: "Wall 4",
    description: "West wall",
    type: "surface",
    icon: "🧱",
  },
  {
    id: "ceiling",
    name: "Ceiling",
    description: "Room ceiling",
    type: "surface",
    icon: "⬜",
  },
  {
    id: "cabinet",
    name: "Cabinet",
    description: "Kitchen cabinet",
    type: "furniture",
    icon: "🗄️",
  },
  {
    id: "door",
    name: "Door",
    description: "Room door",
    type: "fixture",
    icon: "🚪",
  },
];
