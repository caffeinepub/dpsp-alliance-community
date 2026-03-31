import SectionReveal from "../components/SectionReveal";

interface EventItem {
  title: string;
  date: string;
  description: string;
  status: "upcoming" | "ongoing" | "past";
  type: string;
}

const upcomingEvents: EventItem[] = [
  {
    title: "DPSP Grand War Season 5",
    date: "April 15, 2026",
    description:
      "The biggest inter-alliance war of the year. All 32 families participate in the grand battle for DPSP supremacy.",
    status: "upcoming",
    type: "Alliance War",
  },
  {
    title: "Family Leadership Summit",
    date: "April 22, 2026",
    description:
      "All family leaders gather to discuss alliance strategy, upcoming challenges, and community growth plans.",
    status: "upcoming",
    type: "Summit",
  },
  {
    title: "Recruitment Drive 2026",
    date: "May 1, 2026",
    description:
      "Open recruitment period for new members across all DPSP Alliance families. Invite your strongest allies.",
    status: "upcoming",
    type: "Recruitment",
  },
];

const pastEvents: EventItem[] = [
  {
    title: "DPSP Alliance Anniversary Celebration",
    date: "January 10, 2026",
    description:
      "Celebrated another year of growth and unity with special in-game events, rewards, and community gatherings.",
    status: "past",
    type: "Celebration",
  },
  {
    title: "Winter War Tournament",
    date: "December 20, 2025",
    description:
      "A fierce tournament between all DPSP families to determine the top warring family of the season.",
    status: "past",
    type: "Tournament",
  },
  {
    title: "New Member Orientation Week",
    date: "November 5, 2025",
    description:
      "A week-long onboarding program introducing new members to DPSP culture, rules, and expectations.",
    status: "past",
    type: "Orientation",
  },
];

const statusStyles = {
  upcoming: {
    label: "Upcoming",
    color: "#16a34a",
    bg: "#dcfce7",
    border: "#bbf7d0",
  },
  ongoing: {
    label: "Ongoing",
    color: "#2563eb",
    bg: "#dbeafe",
    border: "#bfdbfe",
  },
  past: {
    label: "Completed",
    color: "#64748b",
    bg: "#f1f5f9",
    border: "#e2e8f0",
  },
};

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const s = statusStyles[event.status];
  return (
    <div
      className="rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(37,99,235,0.1)] transition-all duration-300"
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
      }}
      data-ocid={`events.item.${index + 1}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-md"
          style={{
            background: "#dbeafe",
            color: "#2563eb",
            border: "1px solid #bfdbfe",
          }}
        >
          {event.type}
        </span>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-md"
          style={{
            background: s.bg,
            color: s.color,
            border: `1px solid ${s.border}`,
          }}
        >
          {s.label}
        </span>
      </div>
      <h3
        className="text-[#0f172a] font-bold text-lg mb-2"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {event.title}
      </h3>
      <p className="text-xs text-[#64748b] mb-3 flex items-center gap-1.5">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {event.date}
      </p>
      <p className="text-[#64748b] text-sm leading-relaxed">
        {event.description}
      </p>
    </div>
  );
}

export default function Events() {
  return (
    <main className="min-h-screen pt-20 animate-page-enter">
      {/* Dark header */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
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
            Calendar
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            EVENTS
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Stay up to date with upcoming battles, tournaments, and community
            milestones.
          </p>
        </SectionReveal>
      </div>

      {/* Light content */}
      <div
        className="max-w-5xl mx-auto px-6 py-16"
        style={{ background: "#f8fafc" }}
      >
        <SectionReveal className="mb-10">
          <h2
            className="text-2xl font-bold text-[#0f172a] mb-6 section-heading"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Upcoming Events
          </h2>
        </SectionReveal>
        <SectionReveal
          stagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {upcomingEvents.map((ev, i) => (
            <EventCard key={ev.title} event={ev} index={i} />
          ))}
        </SectionReveal>

        <SectionReveal className="mb-10">
          <h2
            className="text-2xl font-bold text-[#0f172a] mb-6 section-heading"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Past Events
          </h2>
        </SectionReveal>
        <SectionReveal
          stagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pastEvents.map((ev, i) => (
            <EventCard key={ev.title} event={ev} index={i} />
          ))}
        </SectionReveal>
      </div>
    </main>
  );
}
