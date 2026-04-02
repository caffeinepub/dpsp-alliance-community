import { useNavigate } from "@tanstack/react-router";
import FamilyCard from "../components/FamilyCard";
import SectionReveal from "../components/SectionReveal";
import { families } from "../data/families";

export default function Members() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen animate-page-enter">
      {/* Dark hero header */}
      <div className="relative pt-28 pb-20 px-6 text-center overflow-hidden">
        <div className="aurora-bg">
          <div className="animated-mesh-bg absolute inset-0" />
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <SectionReveal className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#38bdf8] mb-4">
            Alliance Family List
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black uppercase mb-4 text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: "0 0 30px rgba(37,99,235,0.4)",
            }}
          >
            ALLIANCE MEMBERS
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            All families standing under the DPSP Alliance banner. Click any
            family to view its details.
          </p>
          <p className="text-xs font-medium text-slate-500 mt-2">9 Families</p>
        </SectionReveal>
      </div>

      {/* Light content area */}
      <div className="py-12 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="flex flex-wrap gap-3 justify-center">
            {families.map((family, i) => (
              <FamilyCard
                key={family.tag}
                family={family}
                index={i}
                onClick={() =>
                  navigate({ to: "/family/$tag", params: { tag: family.tag } })
                }
              />
            ))}
          </SectionReveal>
        </div>
      </div>
    </main>
  );
}
