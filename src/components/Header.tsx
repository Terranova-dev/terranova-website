import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Collections", href: "#collections" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[7px] bg-[rgba(244,239,231,0.82)] border-b border-border-warm">
      <div className="flex items-center justify-between px-[380px] h-[69px]">
        <Link
          href="/"
          className="font-[Jost] text-[14px] font-medium tracking-[3px] uppercase text-dark"
        >
          Terranova
        </Link>

        <nav className="flex items-center gap-[44px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-[Jost] text-[12.5px] tracking-[2.246px] uppercase relative ${
                link.active ? "text-gold-dark" : "text-brown"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-[10px] left-0 right-0 h-px bg-gold-dark" />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="font-[Jost] text-[12.8px] tracking-[2.048px] uppercase text-brown"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
