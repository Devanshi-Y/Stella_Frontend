import MetricsPanel from "./MetricsPanel";
import MapPanel from "./MapPanel";
import ErrorGraph from "./ErrorGraph";
import SensorPanel from "./SensorPanel";

export default function Dashboard({ state }) {
  if (!state) return null;

  return (
    <div className="grid grid-cols-2 gap-6 px-10 pb-10">
      <MapPanel state={state} />
      <MetricsPanel state={state} />
      <ErrorGraph error={state.error} />
      <SensorPanel state={state} />
    </div>
  );
}
