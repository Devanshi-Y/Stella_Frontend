import { useEffect, useRef } from "react";

export default function RadarMap({ state }) {
  const ref = useRef();
  const trail = useRef([]);

  useEffect(() => {
    if (!state) return;
    const ctx = ref.current.getContext("2d");
    ctx.fillStyle = "#0a0f1c";
    ctx.fillRect(0, 0, 400, 300);

    trail.current.push([...state.estimated_position]);
    ctx.strokeStyle = "#00f5ff";
    ctx.beginPath();
    trail.current.forEach((p, i) => {
      const x = p[0] * 4 + 100;
      const y = p[1] * 4 + 100;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    const x = state.true_position[0] * 4 + 100;
    const y = state.true_position[1] * 4 + 100;

    ctx.fillStyle = "#00ff9d";
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  }, [state]);

  return <canvas ref={ref} width={400} height={300} className="card" />;
}
