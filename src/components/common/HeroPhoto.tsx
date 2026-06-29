import Image from "next/image";

export default function HeroPhoto() {
  return (
    <div className="absolute left-1/2 top-[23%] z-20 -translate-x-1/2">
      <Image
        src="/images/hero/maria.webp"
        alt="Maria Eduarda"
        width={850}
        height={1050}
        priority
        className="h-auto w-[clamp(560px,42vw,820px)] select-none"
      />
    </div>
  );
}