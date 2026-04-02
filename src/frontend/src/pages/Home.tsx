import { Link, useNavigate } from "@tanstack/react-router";
import { Calendar, CheckCircle2, Clock, Shield, Users } from "lucide-react";
import CTASection from "../components/CTASection";
import SectionReveal from "../components/SectionReveal";
import { families } from "../data/families";

const stats = [
  { id: "families", icon: Users, value: "8", label: "Alliance Families" },
  { id: "members", icon: Shield, value: "100+", label: "Active Members" },
  { id: "founded", icon: Calendar, value: "2024", label: "Founded" },
  { id: "active", icon: Clock, value: "24/7", label: "Active Community" },
];

const values = [
  {
    id: "loyalty",
    title: "Loyalty First",
    desc: "Every member commits to the code",
  },
  { id: "unity", title: "Strength in Unity", desc: "Together we dominate" },
  { id: "honor", title: "Respect & Honor", desc: "Our foundation" },
];

const particles = [
  { id: "p1", top: "12%", left: "6%", size: 14, dur: 4.2, delay: 0 },
  { id: "p2", top: "22%", left: "88%", size: 10, dur: 5.8, delay: 1.2 },
  { id: "p3", top: "58%", left: "10%", size: 18, dur: 3.9, delay: 0.7 },
  { id: "p4", top: "72%", left: "82%", size: 10, dur: 6.1, delay: 2.1 },
  { id: "p5", top: "38%", left: "94%", size: 14, dur: 4.7, delay: 0.4 },
  { id: "p6", top: "82%", left: "4%", size: 10, dur: 5.3, delay: 1.8 },
  { id: "p7", top: "8%", left: "52%", size: 8, dur: 7.2, delay: 3.0 },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen animate-page-enter">
      {/* Custom CSS for hover effects & particle animation */}
      <style>{`
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.7; }
        }
        .particle-dot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(56,189,248,0.9) 0%, rgba(56,189,248,0) 70%);
        }
        .family-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(56,189,248,0.15);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }
        .family-card:hover {
          border-color: #38bdf8;
          box-shadow: 0 0 24px rgba(56,189,248,0.18), 0 4px 24px rgba(0,0,0,0.35);
          background: rgba(56,189,248,0.07);
          transform: translateY(-4px);
        }
        .discord-cta-btn {
          background: linear-gradient(135deg, #5865f2 0%, #38bdf8 100%);
          box-shadow: 0 0 30px rgba(88,101,242,0.4), 0 4px 20px rgba(0,0,0,0.3);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .discord-cta-btn:hover {
          box-shadow: 0 0 56px rgba(88,101,242,0.7), 0 8px 32px rgba(0,0,0,0.45);
          transform: translateY(-2px);
        }
        .stat-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(37,99,235,0.12);
        }
        .value-prop-card {
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .value-prop-card:hover {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(37,99,235,0.08);
        }
        .value-prop-card:hover .value-icon-bg {
          background: #2563eb;
        }
        .value-prop-card:hover .value-icon {
          color: #ffffff;
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO (full viewport, dark aurora)
      ═══════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Aurora background */}
        <div className="aurora-bg w-full h-full">
          <div className="animated-mesh-bg absolute inset-0" />
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(15,23,42,0.72) 100%)",
          }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle-dot"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `particleFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* DPSP Alliance Logo */}
          <div className="animate-hero-sub flex justify-center mb-8">
            <img
              src="/assets/generated/dpsp-logo-transparent.dim_200x200.png"
              alt="DPSP Alliance Logo"
              className="w-24 h-24 mx-auto animate-float"
              style={{ filter: "drop-shadow(0 0 20px rgba(56,189,248,0.8))" }}
            />
          </div>

          {/* Eyebrow label */}
          <p className="animate-hero-sub text-xs font-semibold tracking-[0.38em] uppercase text-[#38bdf8] mb-5">
            Official Alliance Community
          </p>

          {/* Main title */}
          <h1
            className="animate-hero-title font-black text-white uppercase leading-[1.02] mb-5 tracking-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: "0 0 48px rgba(37,99,235,0.35)",
            }}
          >
            <span className="block text-5xl sm:text-7xl lg:text-8xl">
              DPSP ALLIANCE
            </span>
            <span
              className="block text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #60a5fa 0%, #38bdf8 55%, #60a5fa 100%)",
              }}
            >
              COMMUNITY
            </span>
          </h1>

          {/* Tagline */}
          <p className="animate-hero-sub text-base sm:text-xl text-slate-300 max-w-md mx-auto mb-10 font-light tracking-widest">
            United by Loyalty. Powered by Strength.
          </p>

          {/* Action buttons — Join Alliance + Join Discord */}
          <div className="animate-hero-buttons flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/join"
              className="btn-crimson text-sm w-full sm:w-auto"
              data-ocid="hero.primary_button"
            >
              Join Alliance
            </Link>
            <a
              href="https://discord.gg/pSe6WWSE4"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-cta-btn inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white text-sm w-full sm:w-auto justify-center"
              data-ocid="hero.discord_button"
            >
              {/* Discord SVG icon */}
              <svg
                width="18"
                height="14"
                viewBox="0 0 127 96"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Join Discord
            </a>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #f8fafc)",
          }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — ABOUT THE ALLIANCE (two columns)
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white" id="about">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text content */}
          <SectionReveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-[#2563eb] mb-4">
              About DPSP Alliance
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0f172a] leading-tight mb-6 section-heading"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              WE ARE MORE THAN AN ALLIANCE
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-4">
              DPSP Alliance Community is a premier coalition built on the
              pillars of loyalty, strength, and unwavering respect. Our members
              stand united — forging bonds that transcend the game itself.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-9">
              Founded in 2024, we have grown into a powerful alliance of 8 elite
              families. Each one brings unique strength and dedication to our
              shared mission: dominate, protect, and honor the code.
            </p>
            <Link
              to="/about"
              className="btn-crimson text-sm inline-block"
              data-ocid="about.primary_button"
            >
              Learn More
            </Link>
          </SectionReveal>

          {/* Right — value propositions */}
          <SectionReveal delay={180}>
            <div className="space-y-4">
              {values.map((val) => (
                <div
                  key={val.id}
                  className="value-prop-card flex items-start gap-4 p-5 rounded-2xl border border-[#dbeafe] bg-[#f8fafc]"
                >
                  <div className="value-icon-bg flex-shrink-0 w-10 h-10 rounded-xl bg-[#dbeafe] flex items-center justify-center">
                    <CheckCircle2 className="value-icon w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] mb-1">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#64748b]">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — STATS / ALLIANCE POWER
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal
            stagger
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="stat-card bg-white rounded-2xl p-6 text-center border border-[#e2e8f0] shadow-sm"
                  style={{ borderTop: "3px solid #2563eb" }}
                  data-ocid={`stats.${stat.id}.card`}
                >
                  <Icon className="w-6 h-6 text-[#2563eb] mx-auto mb-3 opacity-50" />
                  <div
                    className="text-3xl font-black text-[#2563eb] mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-[#64748b] uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — ALLIANCE FAMILIES GRID (dark navy)
      ═══════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: "#0f172a" }}
        id="families"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <SectionReveal className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[#38bdf8] mb-3">
              Alliance Members
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              OUR ALLIANCE FAMILIES
            </h2>
            <div
              className="w-14 h-0.5 mx-auto mt-4 rounded-full"
              style={{
                background: "linear-gradient(90deg, #2563eb, #38bdf8)",
              }}
            />
          </SectionReveal>

          {/* Families grid */}
          <SectionReveal
            stagger
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {families.map((family, i) => (
              <button
                type="button"
                key={family.tag}
                className="family-card rounded-2xl p-6 text-center cursor-pointer w-full"
                data-ocid={`families.item.${i + 1}`}
                onClick={() =>
                  navigate({ to: "/family/$tag", params: { tag: family.tag } })
                }
              >
                {/* Accent line */}
                <div
                  className="w-8 h-px mx-auto mb-4"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #38bdf8, transparent)",
                  }}
                />
                {/* Shield micro-icon */}
                <Shield className="w-4 h-4 text-[#38bdf8] mx-auto mb-3 opacity-50" />
                <p className="text-white font-bold text-sm uppercase tracking-wide leading-tight">
                  {family.name}
                </p>
              </button>
            ))}
          </SectionReveal>

          {/* View all button */}
          <SectionReveal className="text-center">
            <Link
              to="/members"
              className="btn-outline-ghost-dark text-sm inline-block"
              data-ocid="families.secondary_button"
            >
              View All Members
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — DISCORD CTA (dark with aurora glow)
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* Dark base */}
        <div className="absolute inset-0" style={{ background: "#08111e" }} />

        {/* Glow orb — Discord purple + sky blue */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(88,101,242,0.22) 0%, rgba(56,189,248,0.1) 45%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />

        {/* Top/bottom border lines */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(88,101,242,0.5), rgba(56,189,248,0.4), transparent)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[#38bdf8] mb-5">
              Join The Alliance
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              READY TO JOIN THE
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #5865f2, #38bdf8)",
                }}
              >
                ALLIANCE?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
              Connect with elite families, prove your loyalty, and rise with the
              DPSP Alliance Community.
            </p>
            <a
              href="https://discord.gg/pSe6WWSE4"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-cta-btn inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-white text-base"
              data-ocid="discord.primary_button"
            >
              {/* Discord logo */}
              <svg
                width="22"
                height="17"
                viewBox="0 0 127 96"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Join on Discord
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Existing CTA section */}
      <CTASection />
    </main>
  );
}
