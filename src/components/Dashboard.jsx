import MapPanel from "./MapPanel";
import TelemetryPanel from "./TelemetryPanel";
import ErrorGraph from "./ErrorGraph";
import SensorPanel from "./SensorPanel";

export default function Dashboard({ state }) {
  if (!state) return null;

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <MapPanel state={state} />
      <TelemetryPanel state={state} />
      <ErrorGraph error={state.error} />
      <SensorPanel state={state} />
    </div>
  );
}
