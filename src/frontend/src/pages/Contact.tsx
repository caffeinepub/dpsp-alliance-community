import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!actor) {
      setError("Connection not ready. Please try again.");
      return;
    }
    setLoading(true);
    try {
      await actor.submitContactSubmission(
        form.name.trim(),
        form.email.trim(),
        form.message.trim(),
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const lightCardStyle = {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
  };

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
            Get In Touch
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            CONTACT US
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have a question or want to reach the DPSP leadership? We&apos;re
            here.
          </p>
        </SectionReveal>
      </div>

      {/* Light content */}
      <div
        className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10"
        style={{ background: "#f8fafc" }}
      >
        <SectionReveal>
          {success ? (
            <div
              className="rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
              }}
              data-ocid="contact.success_state"
            >
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                Message Sent!
              </h2>
              <p className="text-[#64748b] mb-6">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="btn-outline-ghost text-sm"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 space-y-5"
              style={lightCardStyle}
              data-ocid="contact.modal"
            >
              <h2
                className="text-xl font-bold text-[#0f172a]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Send a Message
              </h2>

              {error && (
                <div
                  className="rounded-xl px-4 py-3 text-sm text-red-600"
                  style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                  }}
                  data-ocid="contact.error_state"
                >
                  {error}
                </div>
              )}

              <div className="space-y-1.5">
                <Label className="text-[#64748b] text-xs font-medium">
                  Name
                </Label>
                <Input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb]"
                  data-ocid="contact.input"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[#64748b] text-xs font-medium">
                  Email
                </Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="your@email.com"
                  className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb]"
                  data-ocid="contact.input"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[#64748b] text-xs font-medium">
                  Message
                </Label>
                <Textarea
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Write your message here\u2026"
                  rows={5}
                  className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb] resize-none"
                  data-ocid="contact.textarea"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 font-semibold text-sm"
                style={{
                  background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                  color: "#fff",
                }}
                data-ocid="contact.submit_button"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending\u2026
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="space-y-6">
            <div className="rounded-2xl p-7" style={lightCardStyle}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "#ede9fe",
                    border: "1px solid #ddd6fe",
                  }}
                >
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 127 96"
                    fill="#7289DA"
                    aria-hidden="true"
                  >
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0f172a] font-semibold text-sm">
                    Join our Discord
                  </p>
                  <p className="text-[#64748b] text-xs">
                    Real-time community &amp; support
                  </p>
                </div>
              </div>
              <a
                href="https://discord.gg/pSe6WWSE4"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #5865F2, #7289DA)",
                  boxShadow: "0 0 14px rgba(88,101,242,0.2)",
                }}
                data-ocid="contact.link"
              >
                Join DPSP Discord
              </a>
            </div>

            <div className="rounded-2xl p-7" style={lightCardStyle}>
              <h3 className="text-[#0f172a] font-bold mb-4">
                Community Support
              </h3>
              <div className="space-y-3 text-sm text-[#64748b]">
                {[
                  "For membership questions, contact your family leader directly on Discord.",
                  "For rule violations or reports, use the #reports channel on Discord.",
                  "For alliance partnerships, reach out to DPSP leadership through official channels.",
                  "Response times are typically within 24\u201348 hours for non-urgent matters.",
                ].map((item) => (
                  <div
                    key={item.slice(0, 30)}
                    className="flex items-start gap-2.5"
                  >
                    <span className="text-[#2563eb] mt-0.5">&#9656;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
