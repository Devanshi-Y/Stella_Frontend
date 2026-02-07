import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import { runSimulation, getState } from "./services/api";

export default function App() {
  const [state, setState] = useState(null);

  const startSim = async () => {
    await runSimulation();
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await getState();
        setState(data);
      } catch {}
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero onStart={startSim} />
      <Dashboard state={state} />
    </>
  );
}
