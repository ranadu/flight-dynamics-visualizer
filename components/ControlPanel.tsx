"use client";

import { SimulationInputs } from "@/types/trajectory";

type ControlPanelProps = {
  values: SimulationInputs;
  onChange: (field: keyof SimulationInputs, value: number) => void;
  onReset: () => void;
};

type ControlFieldProps = {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
};

function ControlField({
  label,
  unit,
  min,
  max,
  step,
  value,
  onChange,
}: ControlFieldProps) {
  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-zinc-200">{label}</label>

        <div className="flex items-center gap-2">
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-24 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-right text-sm text-white outline-none transition focus:border-cyan-400"
          />
          <span className="w-10 text-sm text-zinc-400">{unit}</span>
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />

      <div className="flex justify-between text-xs text-zinc-500">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
}

export default function ControlPanel({
  values,
  onChange,
  onReset,
}: ControlPanelProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Simulation Inputs
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          Launch Controls
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Tune launch conditions and inspect how the trajectory responds in real time.
        </p>
      </div>

      <div className="space-y-5">
        <ControlField
          label="Initial Velocity"
          unit="m/s"
          min={10}
          max={300}
          step={1}
          value={values.velocity}
          onChange={(value) => onChange("velocity", value)}
        />

        <ControlField
          label="Launch Angle"
          unit="°"
          min={5}
          max={85}
          step={1}
          value={values.angle}
          onChange={(value) => onChange("angle", value)}
        />

        <ControlField
          label="Mass"
          unit="kg"
          min={1}
          max={100}
          step={1}
          value={values.mass}
          onChange={(value) => onChange("mass", value)}
        />
      </div>

      <button
        onClick={onReset}
        className="mt-6 w-full rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/15"
      >
        Reset to sample defaults
      </button>
    </section>
  );
}
