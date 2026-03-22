export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#060816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Aerospace Micro Project
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Flight Dynamics Visualizer
          </h1>
        </div>

        <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 md:block">
          Interactive Projectile Trajectory Simulator
        </div>
      </div>
    </header>
  );
}