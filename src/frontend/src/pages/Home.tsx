import { Link } from "@tanstack/react-router";
import CTASection from "../components/CTASection";
import FamilyCard from "../components/FamilyCard";
import SectionReveal from "../components/SectionReveal";
import { families } from "../data/families";

export default function Home() {
  return (
    <main className="min-h-screen animate-page-enter">
      {/* HERO — dark navy for cinematic contrast */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="aurora-bg w-full h-full">
          <div className="animated-mesh-bg absolute inset-0" />
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(15,23,42,0.6) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="animate-hero-sub text-xs font-semibold tracking-[0.3em] uppercase text-[#38bdf8] mb-6">
            Official Community
          </p>
          <h1
            className="animate-hero-title text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase leading-[1.05] mb-6 tracking-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: "0 0 40px rgba(37,99,235,0.4)",
            }}
          >
            WELCOME TO
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #60a5fa 100%)",
              }}
            >
              DPSP ALLIANCE
            </span>
            <br />
            COMMUNITY
          </h1>
          <p className="animate-hero-sub text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            A united alliance community built on loyalty, strength, respect, and
            power.
          </p>
          <div className="animate-hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="btn-crimson text-sm w-full sm:w-auto"
              data-ocid="hero.primary_button"
            >
              Join Alliance
            </Link>
            <Link
              to="/members"
              className="btn-outline-ghost-dark text-sm w-full sm:w-auto"
              data-ocid="hero.secondary_button"
            >
              Explore Community
            </Link>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #f8fafc)",
          }}
        />
      </section>

      {/* ALLIANCE FAMILIES — light section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="families">
        <SectionReveal className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#2563eb] mb-3">
            Alliance Family List
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] section-heading-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            OUR ALLIANCE FAMILIES
          </h2>
          <p className="mt-5 text-[#64748b] max-w-xl mx-auto">
            Meet the trusted families standing with DPSP Alliance Community.
          </p>
        </SectionReveal>

        <SectionReveal
          stagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {families.slice(0, 12).map((family, i) => (
            <FamilyCard key={family.tag} family={family} index={i} />
          ))}
        </SectionReveal>

        <SectionReveal className="text-center mt-10">
          <Link
            to="/members"
            className="btn-outline-ghost text-sm inline-block"
            data-ocid="families.secondary_button"
          >
            View All Alliance Members
          </Link>
        </SectionReveal>
      </section>

      <CTASection />
    </main>
  );
}
