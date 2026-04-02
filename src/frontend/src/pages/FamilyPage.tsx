import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Shield, User } from "lucide-react";
import { motion } from "motion/react";
import { families } from "../data/families";

export default function FamilyPage() {
  const { tag } = useParams({ from: "/family/$tag" });
  const family = families.find((f) => f.tag === tag);

  if (!family) {
    return (
      <main className="min-h-screen relative flex items-center justify-center">
        <div className="aurora-bg">
          <div className="animated-mesh-bg absolute inset-0" />
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#38bdf8] text-lg font-semibold mb-4">
            Family not found
          </p>
          <Link
            to="/members"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 text-sm"
            data-ocid="family.back_link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Members
          </Link>
        </div>
      </main>
    );
  }

  const leaderLabel = family.sarkarLeader ? "Sarkar Leader" : "Leader";
  const leaderValue =
    !family.leader || family.leader === "N/A" ? null : family.leader;
  const locationValue =
    !family.houseLocation ||
    family.houseLocation === "N/A" ||
    family.houseLocation === "---"
      ? null
      : family.houseLocation;

  return (
    <main className="min-h-screen relative animate-page-enter">
      {/* Aurora background */}
      <div className="aurora-bg">
        <div className="animated-mesh-bg absolute inset-0" />
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, transparent 30%, rgba(15,23,42,0.65) 100%)",
        }}
      />

      {/* Page content */}
      <div className="relative z-10 pt-28 pb-24 px-6 max-w-3xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <Link
            to="/members"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#38bdf8] transition-colors duration-200 text-sm font-medium group"
            data-ocid="family.back_link"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Members
          </Link>
        </motion.div>

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-5">
            <Shield className="w-4 h-4 text-[#38bdf8]" />
            <span
              className="text-[11px] font-semibold tracking-[0.32em] uppercase"
              style={{ color: "#38bdf8" }}
            >
              Alliance Family
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.04] text-white mb-4 tracking-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow:
                "0 0 48px rgba(56,189,248,0.3), 0 0 80px rgba(37,99,235,0.2)",
            }}
          >
            Welcome to
            <span
              className="block text-transparent bg-clip-text mt-1"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #60a5fa 100%)",
              }}
            >
              {family.name}
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-slate-400 italic text-lg mt-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            &ldquo;{family.tagline}&rdquo;
          </p>

          <div
            className="w-20 h-0.5 rounded-full mt-6"
            style={{
              background:
                "linear-gradient(90deg, #2563eb, #38bdf8, transparent)",
            }}
          />
        </motion.div>

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <div
            className="rounded-2xl px-6 py-5"
            style={{
              background: "rgba(13,27,46,0.55)",
              border: "1px solid rgba(56,189,248,0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#38bdf8] mb-3">
              About
            </p>
            <p
              className="text-slate-300 leading-relaxed"
              style={{ fontSize: "1.0625rem" }}
            >
              {family.about}
            </p>
          </div>
        </motion.div>

        {/* Mission blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-12"
        >
          <div
            className="rounded-2xl px-6 py-5"
            style={{
              background: "rgba(13,27,46,0.55)",
              border: "1px solid rgba(56,189,248,0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <p
              className="text-slate-300 leading-relaxed"
              style={{ fontSize: "1.0625rem" }}
            >
              Our purpose is to create a strong and respected community where
              members stand together, support each other, and grow as one.
            </p>
          </div>
          <div
            className="rounded-2xl px-6 py-5"
            style={{
              background: "rgba(13,27,46,0.55)",
              border: "1px solid rgba(56,189,248,0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <p
              className="text-slate-300 leading-relaxed"
              style={{ fontSize: "1.0625rem" }}
            >
              With teamwork, leadership, and dedication, we continue to build a
              legacy that represents strength and honor.
            </p>
          </div>
        </motion.div>

        {/* Family Details card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(13,27,46,0.98) 0%, rgba(15,23,42,0.96) 100%)",
              border: "1px solid rgba(56,189,248,0.22)",
              boxShadow:
                "0 0 0 1px rgba(56,189,248,0.06), 0 24px 64px rgba(0,0,0,0.55), 0 0 48px rgba(37,99,235,0.1)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
            }}
            data-ocid="family.card"
          >
            <div
              className="w-16 h-0.5 rounded-full mb-7"
              style={{ background: "linear-gradient(90deg, #2563eb, #38bdf8)" }}
            />

            <h2
              className="font-bold text-white uppercase mb-7 opacity-70"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
              }}
            >
              Family Details
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(56,189,248,0.04)",
                  border: "1px solid rgba(56,189,248,0.1)",
                }}
                data-ocid="family.leader.card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-4 h-4" style={{ color: "#38bdf8" }} />
                  <p
                    className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                    style={{ color: "#38bdf8" }}
                  >
                    {leaderLabel}
                  </p>
                </div>
                <p className="text-base font-bold text-white">
                  {leaderValue ? (
                    leaderValue
                  ) : (
                    <span className="text-slate-500 font-normal italic">
                      Not specified
                    </span>
                  )}
                </p>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(56,189,248,0.04)",
                  border: "1px solid rgba(56,189,248,0.1)",
                }}
                data-ocid="family.location.card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4" style={{ color: "#38bdf8" }} />
                  <p
                    className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                    style={{ color: "#38bdf8" }}
                  >
                    House Location
                  </p>
                </div>
                <p className="text-base font-bold text-white">
                  {locationValue ? (
                    locationValue
                  ) : (
                    <span className="text-slate-500 font-normal italic">
                      Not specified
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none rounded-b-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at bottom, rgba(37,99,235,0.18) 0%, transparent 70%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
