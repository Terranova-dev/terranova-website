import Reveal from "@/components/Reveal";

const quotes = [
  {
    text: "Terranova laid a marble floor that reads as a single quarried slab. The book-matching and the hairline joints changed how the whole lobby feels.",
    name: "Ananya Rao",
    role: "Principal, Studio Rao",
  },
  {
    text: "One team specified, supplied and installed every floor across the hotel. Samples in our own light, fitters we knew by name — nothing was left to chance.",
    name: "Marcus Vaz",
    role: "Architect, Vaz & Partners",
  },
  {
    text: "Two years and thousands of guests later, the oak has only grown more beautiful. It is the most-photographed surface in the property.",
    name: "Leïla Haddad",
    role: "Creative Director, Sona Hospitality",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials__grid">
          {quotes.map((q, i) => (
            <Reveal key={q.name} className="quote-card" delay={i * 100}>
              <span className="quote-card__mark">“</span>
              <p className="quote-card__text">{q.text}</p>
              <div className="quote-card__by">
                <span className="quote-card__name">{q.name}</span>
                <span className="quote-card__role">{q.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
