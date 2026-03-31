import type { Family } from "../data/families";

interface FamilyCardProps {
  family: Family;
  index?: number;
}

export default function FamilyCard({ family }: FamilyCardProps) {
  return (
    <div
      className="group relative cursor-default select-none
        px-5 py-2.5 rounded-xl border
        text-[#0f172a] font-semibold text-sm tracking-wide
        transition-all duration-300 ease-out"
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        boxShadow: "0 1px 4px rgba(15,23,42,0.06), 0 0 0 0 rgba(56,189,248,0)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 2px rgba(56,189,248,0.5), 0 4px 16px rgba(37,99,235,0.15)";
        (e.currentTarget as HTMLElement).style.borderColor = "#60a5fa";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 4px rgba(15,23,42,0.06), 0 0 0 0 rgba(56,189,248,0)";
        (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
        (e.currentTarget as HTMLElement).style.transform = "";
      }}
    >
      {family.name}
    </div>
  );
}
