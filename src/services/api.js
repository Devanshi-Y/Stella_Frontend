import axios from "axios";
const BASE = "http://localhost:8000";

export const runSimulation = () =>
  axios.post(`${BASE}/run-simulation`, { duration: 90.0, dt: 0.1 });

export const getState = async () => {
  const res = await axios.get(`${BASE}/current-state`);
  return res.data.state;
};

export const getMetrics = async () => {
  const res = await axios.get(`${BASE}/metrics`);
  return res.data.metrics;
};

export const getTrajectory = async () => {
  const res = await axios.get(`${BASE}/trajectory`);
  return res.data.trajectory_data;
};
