export default function TelemetryPanel({ state }) {
  return (
    <div className="card">
      <h2 className="text-cyan-400 mb-2">Telemetry</h2>
      <p>Altitude: {state.altitude} m</p>
      <p>Velocity: {state.velocity.join(", ")}</p>
      <p>Heading: {state.heading.toFixed(2)}</p>
      <p>Progress: {(state.mission_progress * 100).toFixed(1)}%</p>
    </div>
  );
}

