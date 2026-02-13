# 3D Models Folder

Place your .glb room model files in this folder.

## Supported Models:
- bedroom.glb
- living.glb
- kitchen.glb
- office.glb

## Model Requirements:

1. **Format**: GLB (GLTF Binary)
2. **Mesh Naming**: Each clickable object should be named according to the object IDs:
   - floor
   - wall-1, wall-2, wall-3, wall-4
   - ceiling
   - cabinet
   - door
   - etc.

3. **Scale**: Recommended room size: 10x10x5 units

## If You Don't Have GLB Models:

The application will automatically create a basic room structure with:
- Floor
- 4 Walls
- Ceiling

All of these will be clickable and can have materials applied to them.

## Creating GLB Models:

You can create GLB models using:
- Blender (free, open-source 3D software)
- SketchUp
- 3ds Max
- Any 3D software that supports GLTF export

### Export Settings (Blender):
1. File > Export > glTF 2.0
2. Format: GLB
3. Include: Selected Objects
4. Transform: +Y Up
5. Geometry: Apply Modifiers
6. Export

## Example Mesh Hierarchy:

Room
├── Floor (name: "floor")
├── Wall_North (name: "wall-1")
├── Wall_South (name: "wall-2")
├── Wall_East (name: "wall-3")
├── Wall_West (name: "wall-4")
├── Ceiling (name: "ceiling")
└── Furniture
    ├── Cabinet (name: "cabinet")
    └── Door (name: "door")
