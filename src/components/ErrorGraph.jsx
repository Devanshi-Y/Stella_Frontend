import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function ErrorGraph({ error }) {
  const data = [{ t: 0, error }];

  return (
    <div className="card">
      <h2 className="text-cyan-400 mb-2">Error</h2>
      <LineChart width={350} height={200} data={data}>
        <XAxis dataKey="t" />
        <YAxis />
        <Tooltip />
        <Line dataKey="error" stroke="#00F5FF" />
      </LineChart>
    </div>
  );
}
