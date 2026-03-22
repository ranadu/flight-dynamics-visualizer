type StatStripProps = {
  gravity: number;
  model: string;
  rendering: string;
};

export default function StatStrip({
  gravity,
  model,
  rendering,
}: StatStripProps) {
  const items = [
    { label: "Physics", value: model },
    { label: "Gravity", value: `${gravity} m/s²` },
    { label: "Rendering", value: rendering },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {item.label}
          </p>
          <p className="mt-3 text-base font-medium text-zinc-100">{item.value}</p>
        </div>
      ))}
    </div>
  );
}