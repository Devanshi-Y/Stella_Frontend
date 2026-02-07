import RadarMap from "./RadarMap";
import TelemetryCore from "./TelemetryCore";
import ErrorGraph from "./ErrorGraph";
import ConfidenceGauge from "./ConfidenceGauge";
import SensorStatus from "./SensorStatus";

export default function Dashboard({ state }) {
  if (!state) return null;
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <RadarMap state={state} />
      <TelemetryCore state={state} />
      <ErrorGraph error={state.error} />
      <ConfidenceGauge confidence={state.confidence} />
      <SensorStatus state={state} />
    </div>
  );
}
