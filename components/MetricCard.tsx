type MetricCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export default function MetricCard({ label, value, helper }: MetricCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{value}</p>
      {helper ? <p className="mt-2 text-sm text-zinc-400">{helper}</p> : null}
    </div>
  );
}