export default function MetricsPanel({ state }) {
  return (
    <div className="bg-gray-900 p-5 rounded-xl">
      <h2 className="text-cyan-400 mb-3">Telemetry</h2>
      <p>Error: {state.error.toFixed(2)} m</p>
      <p>Confidence: {(state.confidence * 100).toFixed(1)}%</p>
      <p>Mode: {state.navigation_mode}</p>
      <p>Mission Progress: {(state.mission_progress * 100).toFixed(1)}%</p>
    </div>
  );
}

