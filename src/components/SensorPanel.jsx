export default function SensorPanel({ state }) {
  return (
    <div className="bg-gray-900 p-5 rounded-xl">
      <h2 className="text-cyan-400 mb-3">Sensors</h2>
      <p>GPS: {state.gps_available ? "ACTIVE" : "JAMMED"}</p>
      <p>Navigation Mode: {state.navigation_mode}</p>
    </div>
  );
}

