import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function ErrorGraph({ error }) {
  const data = [{ time: 0, error }];

  return (
    <div className="bg-gray-900 p-5 rounded-xl">
      <h2 className="text-cyan-400 mb-3">Position Error</h2>
      <LineChart width={400} height={200} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="error" stroke="#00F5FF" />
      </LineChart>
    </div>
  );
}

