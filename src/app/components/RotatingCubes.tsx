import { useEffect, useRef } from "react";

export function RotatingCubes({ scale = 1 }: { scale?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let time = 0;

    // Cube definition (vertices -1 to 1)
    const vertices = [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 },
    ];

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // Connecting lines
    ];

    // Hexagonal cluster arrangement (approximate based on visual)
    // 1 center, 6 surrounding
    const baseCubeSize = 50; 
    const baseSpacing = 180;
    
    const cubeSize = baseCubeSize * scale;
    const spacing = baseSpacing * scale;
    
    // Positions relative to center (0,0,0)
    // Hexagon angles: 0, 60, 120, 180, 240, 300
    const offsets = [
      { x: 0, y: 0, z: 0 },
      ...Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        return {
          x: Math.cos(angle) * spacing,
          y: Math.sin(angle) * spacing * 0.9, // Flatten slightly for isometric feel
          z: 0 
        };
      })
    ];

    const render = () => {
      try {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        time += 0.005; // Rotation speed

        // Resize canvas to match display size
        const { width, height } = canvas.getBoundingClientRect();
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }

        const centerX = width / 2;
        const centerY = height / 2;

        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "#c4f240";
        ctx.lineWidth = 2.5 * scale; // Thicker lines for bigger cubes
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Global rotation matrix
        const cosY = Math.cos(time);
        const sinY = Math.sin(time);
        const cosX = Math.cos(time * 0.5);
        const sinX = Math.sin(time * 0.5);

        offsets.forEach((offset, i) => {
           // Add some waviness/floating to individual cubes
           const floatY = Math.sin(time * 2 + i) * 5;

           // For each cube
           const projectedVertices = vertices.map(v => {
              // 1. Scale cube
              let x = v.x * cubeSize;
              let y = v.y * cubeSize;
              let z = v.z * cubeSize;

              // 2. Rotate individual cube
              let tempX = x * Math.cos(time) - z * Math.sin(time);
              let tempZ = x * Math.sin(time) + z * Math.cos(time);
              x = tempX;
              z = tempZ;

              let tempY = y * Math.cos(time * 0.6) - z * Math.sin(time * 0.6);
              z = y * Math.sin(time * 0.6) + z * Math.cos(time * 0.6);
              y = tempY;

              // 3. Translate to cluster position
              let offX = offset.x;
              let offY = offset.y + floatY; // Apply float here
              let offZ = offset.z;

              x += offX;
              y += offY;
              z += offZ;

              // 4. Project 3D to 2D
              // Simple perspective
              const fov = 800;
              const distance = 400; // Camera distance
              const perspectiveScale = fov / (fov + z + distance);
              
              return {
                x: centerX + x * perspectiveScale,
                y: centerY + y * perspectiveScale
              };
           });

           // Draw edges
           ctx.beginPath();
           edges.forEach(([start, end]) => {
              const p1 = projectedVertices[start];
              const p2 = projectedVertices[end];
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
           });
           ctx.stroke();
        });

        animationFrameId = requestAnimationFrame(render);
      } catch (e) {
        console.error("Canvas render error:", e);
      }
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [scale]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full pointer-events-none"
    />
  );
}
