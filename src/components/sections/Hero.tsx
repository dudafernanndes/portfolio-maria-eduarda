import HeroLeft from "@/components/common/HeroLeft";
import HeroPhoto from "@/components/common/HeroPhoto";
import HeroRight from "@/components/common/HeroRight";
import HeroTitle from "@/components/common/HeroTitle";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_center,#b000f5_0%,#7b009e_45%,#050505_100%)]">
      <div className="absolute left-1/2 top-8 z-40 flex -translate-x-1/2 items-center gap-3 text-xl text-white">
        <span className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_18px_#22c55e]" />
        <span>Open To Work</span>
      </div>

      <HeroTitle />
      <HeroPhoto />

      <div className="absolute inset-x-0 top-[47%] z-30 mx-auto flex w-full max-w-[1400px] -translate-y-1/2 items-center justify-between px-16">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}