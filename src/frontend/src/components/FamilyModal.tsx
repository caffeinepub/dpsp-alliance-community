import { useEffect } from "react";
import type { Family } from "../data/families";

interface Props {
  family: Family | null;
  onClose: () => void;
}

export default function FamilyModal({ family, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    if (!family) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [family, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (family) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [family]);

  if (!family) return null;

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalScaleIn {
          from { opacity: 0; transform: scale(0.88) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-backdrop {
          animation: modalFadeIn 0.22s ease forwards;
        }
        .modal-card {
          animation: modalScaleIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        dialog.modal-backdrop::backdrop {
          display: none;
        }
        dialog.modal-backdrop {
          max-width: 100%;
          max-height: 100%;
          border: none;
          padding: 0;
          background: transparent;
        }
      `}</style>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: Escape key is handled globally via window event listener above */}
      <dialog
        open
        className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 w-full h-full m-0"
        style={{ background: "rgba(5, 10, 22, 0.82)" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        data-ocid="family_modal.dialog"
        aria-label={`${family.name} family details`}
      >
        {/* Modal card */}
        <div
          className="modal-card relative w-full max-w-sm rounded-3xl p-8 text-white"
          style={{
            background:
              "linear-gradient(145deg, rgba(13,27,46,0.98) 0%, rgba(15,23,42,0.96) 100%)",
            border: "1px solid rgba(56,189,248,0.22)",
            boxShadow:
              "0 0 0 1px rgba(56,189,248,0.08), 0 24px 64px rgba(0,0,0,0.6), 0 0 48px rgba(37,99,235,0.12)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
            style={{
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.15)",
            }}
            aria-label="Close"
            data-ocid="family_modal.close_button"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Top accent line */}
          <div
            className="w-16 h-0.5 rounded-full mb-6"
            style={{
              background: "linear-gradient(90deg, #2563eb, #38bdf8)",
            }}
          />

          {/* Family name */}
          <h2
            className="text-2xl sm:text-3xl font-black uppercase tracking-wide mb-1 leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(56,189,248,0.35)",
            }}
          >
            {family.name}
          </h2>

          {/* Divider */}
          <div
            className="my-5 h-px rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(56,189,248,0.4), rgba(56,189,248,0.05))",
            }}
          />

          {/* Info rows */}
          <div className="space-y-5">
            {/* Leader */}
            <div>
              <p
                className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1"
                style={{ color: "#38bdf8" }}
              >
                Leader
              </p>
              <p className="text-base font-bold text-white">
                {family.leader === "N/A" ? (
                  <span className="text-slate-500 font-normal italic">
                    Not specified
                  </span>
                ) : (
                  family.leader
                )}
              </p>
            </div>

            {/* House Location */}
            <div>
              <p
                className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1"
                style={{ color: "#38bdf8" }}
              >
                House Location
              </p>
              <p className="text-base font-bold text-white">
                {family.houseLocation === "N/A" ||
                family.houseLocation === "---" ? (
                  <span className="text-slate-500 font-normal italic">
                    Not specified
                  </span>
                ) : (
                  family.houseLocation
                )}
              </p>
            </div>
          </div>

          {/* Bottom glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 pointer-events-none rounded-b-3xl"
            style={{
              background:
                "radial-gradient(ellipse at bottom, rgba(37,99,235,0.18) 0%, transparent 70%)",
            }}
          />
        </div>
      </dialog>
    </>
  );
}
