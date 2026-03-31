import { Link } from "@tanstack/react-router";
import SectionReveal from "./SectionReveal";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "#0f172a",
        }}
      />
      {/* Subtle aurora glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, rgba(56,189,248,0.08) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#38bdf8] mb-4">
            Alliance Awaits
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            READY TO JOIN DPSP
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #60a5fa, #38bdf8)",
              }}
            >
              ALLIANCE COMMUNITY?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Become part of a powerful alliance built for loyalty and unity.
          </p>
          <Link
            to="/join"
            className="btn-crimson inline-block text-sm"
            data-ocid="cta.primary_button"
          >
            Join Us Now
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
