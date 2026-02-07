import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import { runSimulation, getState } from "./services/api";

export default function App() {
  const [state, setState] = useState(null);

  const start = async () => await runSimulation();

  useEffect(() => {
    const i = setInterval(async () => {
      try {
        setState(await getState());
      } catch {}
    }, 200);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <Hero onStart={start} />
      <Dashboard state={state} />
    </>
  );
}
