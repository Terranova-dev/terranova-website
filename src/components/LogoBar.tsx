const clients = [
  ["Studio Rao", "Vaz & Partners", "Sona Hospitality", "Meridian Developers", "Atelier Nord"],
  ["Form Architects", "Lumen Group", "Casa & Co"],
];

export default function LogoBar() {
  return (
    <section className="py-[75px] border-b border-border-light">
      <div className="px-[380px]">
        {/* Label */}
        <div className="flex items-center gap-[10px] mb-[48px]">
          <span className="w-[24.63px] h-px bg-gold" />
          <span className="font-[Jost] text-[11.2px] tracking-[4.032px] uppercase text-gold-dark text-center">
            Specified by leading studios & developers
          </span>
        </div>

        {/* Client names */}
        <div className="space-y-[8px]">
          {clients.map((row, i) => (
            <div key={i} className="flex justify-center gap-[56px]">
              {row.map((name) => (
                <span
                  key={name}
                  className="font-[Newsreader] text-[24px] tracking-[0.24px] text-brown-muted opacity-85"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
