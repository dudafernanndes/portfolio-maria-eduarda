export default function HeroBadge() {
  return (
    <div className="absolute left-1/2 top-8 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
      <span className="h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_15px_#84cc16]" />

      <span className="text-sm font-medium tracking-wide text-white">
        Open To Work
      </span>
    </div>
  );
}