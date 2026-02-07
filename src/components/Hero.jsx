export default function Hero({ onStart }) {
  return (
    <div className="text-center py-10">
      <h1 className="text-6xl font-bold text-cyan-400">STELLA</h1>
      <p className="text-lg text-gray-400">Where GPS Fails</p>
      <button
        onClick={onStart}
        className="mt-5 px-6 py-3 bg-cyan-500 text-black rounded-lg font-bold"
      >
        ▶ Run Simulation
      </button>
    </div>
  );
}
