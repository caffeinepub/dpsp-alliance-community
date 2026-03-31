import { Input } from "@/components/ui/input";
import { useState } from "react";
import FamilyCard from "../components/FamilyCard";
import SectionReveal from "../components/SectionReveal";
import { families } from "../data/families";

export default function Members() {
  const [query, setQuery] = useState("");

  const filtered = families.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="min-h-screen animate-page-enter">
      {/* Dark hero header */}
      <div
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{ marginTop: "64px" }}
      >
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
            All families standing under the DPSP Alliance banner.
          </p>
          <p className="text-xs font-medium text-slate-500 mt-2">8 Families</p>
        </SectionReveal>
      </div>

      {/* Light content area */}
      <div className="py-12 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="max-w-md mx-auto mb-12">
            <div className="relative">
              <svg
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748b] w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path
                  d="M21 21l-4.35-4.35"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <Input
                placeholder="Search by name\u2026"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#64748b] focus:border-[#2563eb] h-11"
                data-ocid="members.search_input"
              />
            </div>
          </SectionReveal>

          {filtered.length === 0 ? (
            <div
              className="text-center py-20 text-[#64748b]"
              data-ocid="members.empty_state"
            >
              <p className="text-lg">
                No families found for &ldquo;{query}&rdquo;
              </p>
            </div>
          ) : (
            <SectionReveal className="flex flex-wrap gap-3 justify-center">
              {filtered.map((family, i) => (
                <FamilyCard key={family.tag} family={family} index={i} />
              ))}
            </SectionReveal>
          )}

          {filtered.length > 0 && (
            <p className="text-center text-xs text-[#64748b] mt-10">
              Showing {filtered.length} of {families.length} families
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
