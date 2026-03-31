import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "#0f172a",
        borderTop: "1px solid rgba(37,99,235,0.2)",
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Single row on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Brand */}
          <div className="flex-shrink-0">
            <p
              className="text-base font-bold tracking-widest text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              DPSP Alliance Community
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              United by loyalty, powered by strength.
            </p>
          </div>

          {/* Links — center on desktop */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 md:mx-auto">
            <a
              href="https://discord.gg/pSe6WWSE4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
              data-ocid="footer.link"
            >
              <svg
                width="15"
                height="11"
                viewBox="0 0 127 96"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Discord
            </a>
            <Link
              to="/"
              className="hover:text-[#38bdf8] transition-colors"
              data-ocid="footer.link"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="hover:text-[#38bdf8] transition-colors"
              data-ocid="footer.link"
            >
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-start md:items-end gap-0.5 text-xs text-slate-500 flex-shrink-0">
            <p>&copy; {year} DPSP Alliance Community. All rights reserved.</p>
            <p>
              Built with &hearts; using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
