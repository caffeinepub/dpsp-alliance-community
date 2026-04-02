import SectionReveal from "../components/SectionReveal";

const ruleSections = [
  {
    title: "General Rules",
    icon: "📋",
    rules: [
      "All members must treat each other with respect. Harassment, bullying, or discrimination of any kind will not be tolerated.",
      "No spamming in community channels. Keep conversations relevant to the topic at hand.",
      "Sharing of personal information without consent is strictly prohibited.",
      "Do not impersonate other members, leaders, or staff of the alliance.",
      "All disputes must be handled through the proper chain of command — contact your family leader first.",
      "Inactivity for more than 14 days without notice may result in removal from the alliance roster.",
      "Members are expected to represent DPSP with honor both inside and outside of the game.",
    ],
  },
  {
    title: "Alliance Rules",
    icon: "⚔️",
    rules: [
      "Loyalty to the DPSP Alliance is mandatory. Secretly cooperating with rival alliances is grounds for immediate removal.",
      "Resources and intel shared within the alliance must remain confidential.",
      "During alliance wars, every active member is expected to participate unless excused by a leader.",
      "No member may attack or betray another DPSP family without express authorization from the High Council.",
      "Alliance decisions are final once passed by the High Council. Disputes may be raised through official channels.",
      "New family partnerships must be approved by alliance leadership before any formal agreement is made.",
      "Poaching of members from sister families is a serious offense subject to disciplinary action.",
    ],
  },
  {
    title: "Event Rules",
    icon: "🏆",
    rules: [
      "Participation in official alliance events is expected from all active members.",
      "Use of exploits, cheats, or unauthorized third-party tools during events is a permanent ban offense.",
      "Event results are final. Appeals must be submitted within 24 hours of event conclusion.",
      "Sportsmanship is required at all times. Taunting or disrespecting opponents reflects poorly on all of DPSP.",
      "Event schedules will be announced at least 48 hours in advance. No last-minute cancellations without valid reason.",
      "Prize distribution from events is handled solely by alliance officers and is not subject to negotiation.",
    ],
  },
  {
    title: "Punishments",
    icon: "⚖️",
    rules: [
      "Minor violations (first offense): Verbal warning issued by family leader.",
      "Repeated minor violations: Written warning and temporary suspension from events (3–7 days).",
      "Major violations (harassment, cheating, leaking intel): Immediate suspension pending investigation.",
      "Betrayal of the alliance or deliberate sabotage: Permanent removal from DPSP Alliance Community with no right of appeal.",
      "All punishments are documented and recorded in the alliance log.",
      "Members who have been warned twice may face mandatory review before the High Council.",
      "The right to appeal any punishment is available within 72 hours via the official Discord channel.",
    ],
  },
];

export default function Rules() {
  return (
    <main className="min-h-screen animate-page-enter">
      {/* Dark header — starts at top, behind navbar */}
      <div className="relative pt-28 pb-20 px-6 text-center overflow-hidden">
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
              "radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.1) 0%, transparent 65%)",
          }}
        />
        <SectionReveal className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#38bdf8] mb-4">
            Code of Conduct
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ALLIANCE RULES
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Every member of DPSP is expected to uphold these standards without
            exception.
          </p>
        </SectionReveal>
      </div>

      {/* Light content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        {ruleSections.map((section, si) => (
          <SectionReveal key={section.title} delay={si * 80}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{
                  background: "#dbeafe",
                  borderBottom: "1px solid #bfdbfe",
                }}
              >
                <span className="text-xl">{section.icon}</span>
                <h2
                  className="text-lg font-bold text-[#0f172a]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {section.title}
                </h2>
              </div>
              <ol className="p-6 space-y-3">
                {section.rules.map((rule) => (
                  <li
                    key={rule.slice(0, 40)}
                    className="flex gap-3 text-sm text-[#64748b] leading-relaxed"
                  >
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "#dbeafe",
                        color: "#2563eb",
                        border: "1px solid #bfdbfe",
                      }}
                    >
                      &bull;
                    </span>
                    {rule}
                  </li>
                ))}
              </ol>
            </div>
          </SectionReveal>
        ))}
      </div>
    </main>
  );
}
