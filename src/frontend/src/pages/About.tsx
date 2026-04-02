import { motion } from "motion/react";
import SectionReveal from "../components/SectionReveal";

const pillars = [
  {
    icon: "⚔️",
    title: "Strength",
    desc: "We train together, compete together, and grow stronger as one unified force.",
  },
  {
    icon: "🤝",
    title: "Loyalty",
    desc: "Loyalty to the alliance and to each other is the foundation of our community.",
  },
  {
    icon: "🛡️",
    title: "Respect",
    desc: "Every member is treated with dignity. Respect is earned and freely given.",
  },
  {
    icon: "👑",
    title: "Power",
    desc: "Together we hold the power to dominate any field of competition.",
  },
];

const leaders = [
  { role: "Founder", name: "Feroze", delay: 0 },
  { role: "Founder", name: "Krish Ripper", delay: 0.1 },
  { role: "Founder", name: "Alex Arora", delay: 0.2 },
  { role: "Co-Founder", name: "Akarsh Pandey", delay: 0.3 },
  { role: "Co-Founder", name: "Michael Kesari", delay: 0.4 },
  { role: "Co-Founder", name: "Sheikh Escobar", delay: 0.5 },
];

const lightCardStyle = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
};

export default function About() {
  return (
    <main className="min-h-screen animate-page-enter">
      {/* Dark page hero — starts at top:0, behind navbar */}
      <div className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="aurora-bg">
          <div className="animated-mesh-bg absolute inset-0" />
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.12) 0%, transparent 65%)",
          }}
        />
        <SectionReveal className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#38bdf8] mb-4">
            Our Story
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ABOUT DPSP
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            DPSP Alliance Community was forged from a shared vision — to build
            the strongest, most loyal, and most respected alliance in the gaming
            world.
          </p>
        </SectionReveal>
      </div>

      {/* Mission & Vision — light */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <SectionReveal>
            <div className="rounded-2xl p-8 h-full" style={lightCardStyle}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: "#dbeafe",
                  border: "1px solid #bfdbfe",
                }}
              >
                🎯
              </div>
              <h2
                className="text-2xl font-bold text-[#0f172a] mb-3 section-heading"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Our Mission
              </h2>
              <p className="text-[#64748b] leading-relaxed mt-6">
                To unite the most dedicated players under one banner — building
                a community where every member grows, every family thrives, and
                the DPSP name stands for excellence, integrity, and unstoppable
                force.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="rounded-2xl p-8 h-full" style={lightCardStyle}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: "#dbeafe",
                  border: "1px solid #bfdbfe",
                }}
              >
                🔭
              </div>
              <h2
                className="text-2xl font-bold text-[#0f172a] mb-3 section-heading"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Our Vision
              </h2>
              <p className="text-[#64748b] leading-relaxed mt-6">
                To become the premier gaming alliance community — recognized
                globally for our discipline, our camaraderie, and our unmatched
                collective power. We envision a future where DPSP sets the
                standard for what an alliance should be.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Alliance story — light blue tint */}
      <section className="py-20 px-6" style={{ background: "#dbeafe" }}>
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#0f172a] section-heading-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The Alliance Story
            </h2>
          </SectionReveal>
          <SectionReveal>
            <div className="space-y-5 text-[#64748b] leading-relaxed text-base">
              <p>
                DPSP Alliance Community began as a small group of determined
                players who refused to be average. Founded with the belief that
                a united front is unbreakable, the community grew rapidly as
                word spread about the family-like atmosphere and fierce
                competitive spirit.
              </p>
              <p>
                From humble beginnings, DPSP expanded to include over 32
                distinct alliance families — each with their own culture,
                strengths, and traditions — all bound together under the DPSP
                banner. Every family brings something unique to the table,
                creating a diverse yet cohesive force.
              </p>
              <p>
                Today, DPSP Alliance Community stands as one of the most
                formidable and respected alliance networks, with members
                spanning across regions and time zones. We have faced every
                challenge head-on, and with every victory and every setback, we
                have only grown stronger.
              </p>
              <p>
                Our story is still being written — and the best chapters are yet
                to come.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Pillars — light */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionReveal className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-[#0f172a] section-heading-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Our Core Pillars
          </h2>
        </SectionReveal>
        <SectionReveal
          stagger
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 text-center
                hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] transition-all duration-300"
              style={lightCardStyle}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-[#0f172a] font-bold mb-2">{p.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </SectionReveal>
      </section>

      {/* Leadership — Royal Theme */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0a0f1e 0%, #0f172a 50%, #0a0d1a 100%)",
        }}
      >
        {/* Subtle gold radial glow in background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Decorative corner ornaments */}
        <div
          className="absolute top-8 left-8 w-16 h-16 pointer-events-none opacity-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,215,0,0.6) 0%, transparent 60%)",
            borderTop: "2px solid rgba(255,215,0,0.5)",
            borderLeft: "2px solid rgba(255,215,0,0.5)",
            borderRadius: "4px 0 0 0",
          }}
        />
        <div
          className="absolute top-8 right-8 w-16 h-16 pointer-events-none opacity-20"
          style={{
            background:
              "linear-gradient(225deg, rgba(255,215,0,0.6) 0%, transparent 60%)",
            borderTop: "2px solid rgba(255,215,0,0.5)",
            borderRight: "2px solid rgba(255,215,0,0.5)",
            borderRadius: "0 4px 0 0",
          }}
        />
        <div
          className="absolute bottom-8 left-8 w-16 h-16 pointer-events-none opacity-20"
          style={{
            background:
              "linear-gradient(45deg, rgba(255,215,0,0.6) 0%, transparent 60%)",
            borderBottom: "2px solid rgba(255,215,0,0.5)",
            borderLeft: "2px solid rgba(255,215,0,0.5)",
            borderRadius: "0 0 0 4px",
          }}
        />
        <div
          className="absolute bottom-8 right-8 w-16 h-16 pointer-events-none opacity-20"
          style={{
            background:
              "linear-gradient(315deg, rgba(255,215,0,0.6) 0%, transparent 60%)",
            borderBottom: "2px solid rgba(255,215,0,0.5)",
            borderRight: "2px solid rgba(255,215,0,0.5)",
            borderRadius: "0 0 4px 0",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <SectionReveal className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "#FFD700" }}
            >
              ✦ The Team ✦
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#FFD700",
                textShadow: "0 0 30px rgba(255,215,0,0.3)",
              }}
            >
              Our Leadership
            </h2>
            {/* Gold shimmer divider */}
            <div className="flex items-center justify-center gap-3">
              <div
                style={{
                  height: "1px",
                  width: "60px",
                  background: "linear-gradient(to right, transparent, #FFD700)",
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#FFD700",
                  transform: "rotate(45deg)",
                  boxShadow: "0 0 8px rgba(255,215,0,0.8)",
                }}
              />
              <div
                style={{
                  height: "1px",
                  width: "60px",
                  background: "linear-gradient(to left, transparent, #FFD700)",
                }}
              />
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: leader.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: leader.delay + 1,
                  }}
                  className="rounded-2xl p-8 text-center cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,215,0,0.2)",
                  }}
                  whileHover={{
                    boxShadow:
                      "0 0 32px rgba(255,215,0,0.25), 0 8px 32px rgba(0,0,0,0.4)",
                    borderColor: "rgba(255,215,0,0.45)",
                    y: -4,
                  }}
                >
                  {/* Gold diamond accent instead of emoji */}
                  <div className="flex items-center justify-center mb-5">
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        background: "linear-gradient(135deg, #B8860B, #FFD700)",
                        transform: "rotate(45deg)",
                        boxShadow: "0 0 12px rgba(255,215,0,0.6)",
                      }}
                    />
                  </div>
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                    style={{
                      background: "rgba(255,215,0,0.1)",
                      color: "#FFD700",
                      border: "1px solid rgba(255,215,0,0.35)",
                    }}
                  >
                    {leader.role}
                  </span>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      textShadow: "0 1px 8px rgba(255,215,0,0.15)",
                    }}
                  >
                    {leader.name}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
