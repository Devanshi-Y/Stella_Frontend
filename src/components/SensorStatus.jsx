export default function SensorPanel({ state }) {
  return (
    <div className="card">
      <h2 className="text-cyan-400 mb-2">Sensors</h2>
      <p>GPS: {state.gps_available ? "ACTIVE" : "JAMMED"}</p>
      <p>Navigation Mode: {state.navigation_mode}</p>
      <p>Confidence: {(state.confidence * 100).toFixed(1)}%</p>
    </div>
  );
}
