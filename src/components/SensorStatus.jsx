export default function SensorStatus({ state }) {
  return (
    <div className="card">
      <h2 className="text-cyan-400">Sensors</h2>
      <p>GPS: {state.gps_available ? "ACTIVE" : "JAMMED"}</p>
      <p>Mode: {state.navigation_mode}</p>
    </div>
  );
}
