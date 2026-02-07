const BASE = "http://localhost:8000";

export const runSimulation = async () => {
  await fetch(`${BASE}/run-simulation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ duration: 90.0, dt: 0.1 }),
  });
};

export const getState = async () => {
  const res = await fetch(`${BASE}/current-state`);
  const data = await res.json();
  return data.state;
};
