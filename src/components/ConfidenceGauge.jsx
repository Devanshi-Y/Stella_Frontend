export default function ConfidenceGauge({ confidence }) {
  const c = confidence * 100;
  return (
    <div className="card text-center">
      <h2 className="text-cyan-400">Confidence</h2>
      <p className="text-4xl text-green-400">{c.toFixed(1)}%</p>
    </div>
  );
}

