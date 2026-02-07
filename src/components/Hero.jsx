export default function Hero({ onStart }) {
  return (
    <div className="text-center py-14">
      <h1 className="text-6xl font-bold text-cyan-400">STELLA</h1>
      <p className="text-xl mt-3 text-gray-300">Where GPS Fails</p>
      <button
        onClick={onStart}
        className="mt-6 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400"
      >
        ▶ Run Simulation
      </button>
    </div>
  );
}
