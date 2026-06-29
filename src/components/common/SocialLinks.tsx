import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  const socials = [
    { icon: FaWhatsapp, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: MdEmail, href: "#" },
  ];

  return (
    <div className="flex items-center gap-5">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <a
            key={index}
            href={social.href}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 text-4xl text-white transition hover:scale-110 hover:bg-white/10"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}