"use client";

import { useMemo, useState } from "react";
import ControlPanel from "@/components/ControlPanel";
import MetricCard from "@/components/MetricCard";
import Navbar from "@/components/Navbar";
import TrajectoryChart from "@/components/TrajectoryChart";
import { GRAVITY, calculateTrajectory } from "@/lib/trajectory";
import { SimulationInputs } from "@/types/trajectory";

const DEFAULT_VALUES: SimulationInputs = {
  velocity: 120,
  angle: 45,
  mass: 15,
};

export default function Page() {
  const [inputs, setInputs] = useState<SimulationInputs>(DEFAULT_VALUES);

  const simulation = useMemo(() => calculateTrajectory(inputs), [inputs]);

  function handleChange(field: keyof SimulationInputs, value: number) {
    setInputs((prev) => ({
      ...prev,
      [field]: Number.isFinite(value) ? value : prev[field],
    }));
  }

  function handleReset() {
    setInputs(DEFAULT_VALUES);
  }

  return (
    <main className="min-h-screen text-white">
      <Navbar />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
          Aerospace Visualization
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Flight Dynamics Visualizer
        </h1>

        <p className="mt-6 text-lg text-zinc-400">
          Interactive projectile motion simulator with real-time trajectory
          visualization and physics-based metrics.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-black hover:bg-cyan-300 transition">
            Live Simulation
          </button>
          <button className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-300 hover:bg-white/5 transition">
            View Source
          </button>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto mt-16 max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
          
          {/* LEFT: CONTROLS */}
          <ControlPanel
            values={inputs}
            onChange={handleChange}
            onReset={handleReset}
          />

          {/* RIGHT: VISUAL + METRICS */}
          <div className="space-y-8">
            
            {/* CHART */}
            <TrajectoryChart data={simulation.points} />

            {/* METRICS */}
            <div className="grid gap-6 md:grid-cols-3">
              <MetricCard
                label="Max Height"
                value={`${simulation.metrics.maxHeight} m`}
                helper="Peak vertical position"
              />
              <MetricCard
                label="Range"
                value={`${simulation.metrics.range} m`}
                helper="Horizontal distance"
              />
              <MetricCard
                label="Time"
                value={`${simulation.metrics.timeOfFlight} s`}
                helper="Total flight duration"
              />
            </div>

            {/* PARAM SUMMARY */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                Active Parameters
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-xs text-zinc-500">Velocity</p>
                  <p className="mt-1 text-lg font-medium">
                    {inputs.velocity} m/s
                  </p>
                </div>

                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-xs text-zinc-500">Angle</p>
                  <p className="mt-1 text-lg font-medium">
                    {inputs.angle}°
                  </p>
                </div>

                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-xs text-zinc-500">Mass</p>
                  <p className="mt-1 text-lg font-medium">
                    {inputs.mass} kg
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}