import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Members", to: "/members" },
  { label: "Rules", to: "/rules" },
  { label: "Events", to: "/events" },
  { label: "Media", to: "/media" },
  { label: "Join Us", to: "/join" },
  { label: "Contact", to: "/contact" },
] as const;

type NavTo = (typeof navLinks)[number]["to"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: closing on nav change is intentional
  useEffect(() => {
    setOpen(false);
  }, [routerState]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15, 23, 42, 0.97)"
          : "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(37,99,235,0.35)"
          : "1px solid rgba(37,99,235,0.15)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-white
            transition-all duration-200 hover:text-[#38bdf8] select-none"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          data-ocid="nav.link"
        >
          DPSP
        </Link>

        {/* 3-dot menu button */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="w-10 h-10 flex items-center justify-center rounded-xl
              text-slate-400 transition-all duration-200
              hover:text-[#38bdf8] hover:bg-[rgba(56,189,248,0.12)]
              focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.4)]"
            data-ocid="nav.open_modal_button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="9" cy="3" r="1.8" />
              <circle cx="9" cy="9" r="1.8" />
              <circle cx="9" cy="15" r="1.8" />
            </svg>
          </button>

          {open && (
            <div
              className="absolute right-0 top-[calc(100%+8px)] w-56 rounded-2xl
                overflow-hidden animate-fade-in-down"
              style={{
                background: "rgba(15, 23, 42, 0.97)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(37,99,235,0.3)",
                boxShadow:
                  "0 16px 48px rgba(0,0,0,0.4), 0 0 1px rgba(37,99,235,0.3), inset 0 1px 0 rgba(37,99,235,0.08)",
              }}
              data-ocid="nav.dropdown_menu"
            >
              <div className="py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to as NavTo}
                    className="group flex items-center gap-3 px-5 py-3 text-sm font-medium
                      text-slate-400 transition-all duration-150
                      hover:text-white hover:bg-[rgba(37,99,235,0.12)]"
                    data-ocid="nav.link"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-[#38bdf8] opacity-0
                        group-hover:opacity-100 transition-opacity shrink-0"
                    />
                    {link.label}
                    {pathname === link.to && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
