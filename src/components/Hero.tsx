import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[1200px] overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 18%, rgba(29,25,15,1) 0%, rgba(20,17,9,1) 55%, rgba(16,12,6,1) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 15, 8, 0) 0%, rgba(18, 15, 8, 0) 12%, rgba(247, 243, 236, 0.55) 20%, rgb(247, 243, 236) 33%, rgb(247, 243, 236) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-[380px] pt-[418px]">
        {/* Label */}
        <div className="flex items-center gap-[10px] mb-[35px]">
          <span className="w-[24.63px] h-px bg-gold" />
          <span className="font-[Jost] text-[11.2px] tracking-[4.032px] uppercase text-gold-dark">
            High-End Flooring
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-[Newsreader] text-[89.6px] font-medium leading-[93.18px] tracking-[-0.448px] text-dark mb-[37px]">
          Floors that hold
          <br />
          <em>a room together.</em>
        </h1>

        {/* Description */}
        <p className="font-[Inter] text-[20px] leading-[34px] text-brown max-w-[560px] mb-[47px]">
          Engineered hardwood, natural stone and marble, seamless microcement
          and terrazzo — designed and laid by hand for landmark residential,
          hospitality and commercial spaces.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-[32px]">
          <Link
            href="#collections"
            className="inline-block bg-dark text-cream font-[Jost] text-[12.8px] tracking-[2.304px] uppercase px-[34px] py-[18px] rounded-[2px] border border-dark hover:bg-gold-dark hover:border-gold-dark transition-colors"
          >
            View collections
          </Link>
          <Link
            href="#contact"
            className="font-[Jost] text-[12.8px] tracking-[2.048px] uppercase text-brown"
          >
            Request a consultation
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[68px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[14px]">
        <span className="font-[Jost] text-[10.6px] tracking-[3.168px] uppercase text-brown-muted">
          Scroll
        </span>
        <span className="w-px h-[48px] bg-gradient-to-b from-brown-muted to-transparent" />
      </div>
    </section>
  );
}
