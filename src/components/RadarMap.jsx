import { useRef, useEffect } from "react";

export default function MapPanel({ state }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!state) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.fillStyle = "#0A0F1C";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = "#1f2937";
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Drone true position
      const x = state.true_position[0] * 5 + 100;
      const y = state.true_position[1] * 5 + 100;

      ctx.fillStyle = "#00FF9D";
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();

      // Estimated position
      const ex = state.estimated_position[0] * 5 + 100;
      const ey = state.estimated_position[1] * 5 + 100;

      ctx.fillStyle = "#00F5FF";
      ctx.beginPath();
      ctx.arc(ex, ey, 6, 0, Math.PI * 2);
      ctx.fill();
    };

    draw();
  }, [state]);

  return (
    <div className="card">
      <h2 className="text-cyan-400 mb-2">Trajectory Radar</h2>
      <canvas ref={canvasRef} width={400} height={300}></canvas>
    </div>
  );
}
