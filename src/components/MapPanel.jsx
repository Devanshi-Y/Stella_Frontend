export default function MapPanel({ state }) {
  return (
    <div className="card">
      <h2 className="text-cyan-400 mb-2">Position</h2>
      <p>True: {state.true_position.join(", ")}</p>
      <p>Estimated: {state.estimated_position.join(", ")}</p>
      <p>Waypoint: {state.current_waypoint.join(", ")}</p>
    </div>
  );
}
