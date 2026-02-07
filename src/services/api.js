import axios from "axios";
const BASE = "http://localhost:8000";

export const runSimulation = () =>
  axios.post(`${BASE}/run-simulation`, { duration: 90, dt: 0.1 });

export const getState = async () =>
  (await axios.get(`${BASE}/current-state`)).data.state;

export const getMetrics = async () =>
  (await axios.get(`${BASE}/metrics`)).data.metrics;
