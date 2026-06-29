export default function HeroTitle() {
  return (
    <div className="absolute left-1/2 top-[18%] z-10 w-full -translate-x-1/2 text-center">
      <h1 className="whitespace-nowrap text-[clamp(5rem,9vw,10.5rem)] font-black leading-none tracking-tight">
        <span className="text-[#FFE500]">Full Stack</span>{" "}
        <span className="text-white">Developer</span>
      </h1>
    </div>
  );
}