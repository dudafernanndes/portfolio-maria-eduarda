import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-4 rounded-full border border-white/50 px-10 py-5 text-3xl font-bold text-white transition hover:scale-105 hover:bg-white/10"
    >
      {children}
      <ArrowUpRight size={40} />
    </a>
  );
}