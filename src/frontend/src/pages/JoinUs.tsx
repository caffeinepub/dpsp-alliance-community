import SectionReveal from "../components/SectionReveal";

const DISCORD_LINK = "https://discord.gg/pSe6WWSE4";

function DiscordIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Discord"
      role="img"
    >
      <title>Discord</title>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function JoinUs() {
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
            Join the Community
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            JOIN THE ALLIANCE
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Ready to be part of DPSP? Click below to join our Discord server and
            connect with the community.
          </p>
        </SectionReveal>
      </div>

      {/* Discord CTA area */}
      <div
        className="max-w-xl mx-auto px-6 py-20 flex flex-col items-center gap-6"
        style={{ background: "#f8fafc" }}
      >
        <SectionReveal className="w-full">
          <div
            className="rounded-2xl p-10 flex flex-col items-center gap-6 text-center"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 24px rgba(37,99,235,0.07)",
            }}
          >
            {/* Discord icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "#5865F2" }}
            >
              <DiscordIcon size={32} />
            </div>

            <div>
              <h2
                className="text-2xl font-black text-[#0f172a] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Join Our Discord Server
              </h2>
              <p className="text-[#64748b] text-sm max-w-xs mx-auto">
                Connect with alliance members, stay updated on events, and
                become part of the DPSP community.
              </p>
            </div>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #5865F2, #7289da)",
                boxShadow: "0 4px 16px rgba(88,101,242,0.35)",
              }}
            >
              <DiscordIcon size={20} />
              Join Discord Server
            </a>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
