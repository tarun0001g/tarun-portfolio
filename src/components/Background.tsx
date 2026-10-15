/** Fixed ambient backdrop: soft aurora blobs, a fading grid and film grain. Purely decorative. */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-[10%] -top-[15%] h-[55vmax] w-[55vmax] animate-blob rounded-full bg-white/[0.025] blur-[120px]" />
      <div
        className="absolute -right-[15%] top-[10%] h-[48vmax] w-[48vmax] animate-blob rounded-full bg-white/[0.02] blur-[130px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute bottom-[-20%] left-[25%] h-[42vmax] w-[42vmax] animate-blob rounded-full bg-white/[0.015] blur-[140px]"
        style={{ animationDelay: '-12s' }}
      />
      <div className="bg-grid absolute inset-0" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  )
}
