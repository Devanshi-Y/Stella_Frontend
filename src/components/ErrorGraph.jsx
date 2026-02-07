import { LineChart, Line, XAxis, YAxis } from "recharts";
import { useRef } from "react";

export default function ErrorGraph({ error }) {
  const data = useRef([]);
  data.current.push({ t: data.current.length, e: error });

  return (
    <div className="card">
      <LineChart width={350} height={200} data={data.current}>
        <XAxis dataKey="t" />
        <YAxis />
        <Line dataKey="e" stroke="#ff3d3d" />
      </LineChart>
    </div>
  );
}
