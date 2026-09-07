"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Stat = {
  end: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { end: 18, label: "Years laying floors" },
  { end: 1.2, decimals: 1, suffix: "M", label: "Sq ft installed" },
  { end: 320, label: "Projects delivered" },
  { end: 40, label: "Master installers" },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({
  end,
  decimals = 0,
  suffix = "",
  active,
  duration = 1600,
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  active: boolean;
  duration?: number;
}) {
  const [display, setDisplay] = useState(
    decimals > 0 ? `0.${"0".repeat(decimals)}${suffix}` : `0${suffix}`,
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      setDisplay(`${(end * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(`${end.toFixed(decimals)}${suffix}`);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, decimals, suffix, duration]);

  return <span className="tnum">{display}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="statband dark-section">
      <div className="container statband__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="statband__item" delay={i * 100}>
            <span className="statband__value">
              <CountUp
                end={s.end}
                decimals={s.decimals ?? 0}
                suffix={s.suffix ?? ""}
                active={active}
              />
            </span>
            <span className="statband__label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
