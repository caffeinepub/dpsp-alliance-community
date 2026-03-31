import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import { useActor } from "../hooks/useActor";

interface FormState {
  name: string;
  discordUsername: string;
  inGameName: string;
  experience: string;
  whyJoin: string;
}

const initial: FormState = {
  name: "",
  discordUsername: "",
  inGameName: "",
  experience: "",
  whyJoin: "",
};

export default function JoinUs() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (Object.values(form).some((v) => !v.trim())) {
      setError("Please fill in all fields.");
      return;
    }
    if (!actor) {
      setError("Connection not ready. Please try again.");
      return;
    }
    setLoading(true);
    try {
      await actor.submitJoinApplication(
        form.name.trim(),
        form.discordUsername.trim(),
        form.inGameName.trim(),
        form.experience.trim(),
        form.whyJoin.trim(),
      );
      setSuccess(true);
      setForm(initial);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            Applications Open
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            JOIN THE ALLIANCE
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Ready to prove your worth? Submit your application and become part
            of DPSP.
          </p>
        </SectionReveal>
      </div>

      {/* Light form area */}
      <div
        className="max-w-2xl mx-auto px-6 py-16"
        style={{ background: "#f8fafc" }}
      >
        <SectionReveal>
          {success ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
              }}
              data-ocid="join.success_state"
            >
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                Application Submitted!
              </h2>
              <p className="text-[#64748b] mb-6">
                Your application has been received. A leader will reach out to
                you on Discord soon.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="btn-outline-ghost text-sm"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 space-y-6"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
              }}
              data-ocid="join.modal"
            >
              <h2
                className="text-xl font-bold text-[#0f172a] mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Alliance Application
              </h2>
              <p className="text-[#64748b] text-sm">
                Fill out the form below. All fields are required.
              </p>

              {error && (
                <div
                  className="rounded-xl px-4 py-3 text-sm text-red-600"
                  style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                  }}
                  data-ocid="join.error_state"
                >
                  {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label className="text-[#64748b] text-xs font-medium">
                    Full Name
                  </Label>
                  <Input
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb]"
                    data-ocid="join.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[#64748b] text-xs font-medium">
                    Discord Username
                  </Label>
                  <Input
                    value={form.discordUsername}
                    onChange={update("discordUsername")}
                    placeholder="user#0000"
                    className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb]"
                    data-ocid="join.input"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[#64748b] text-xs font-medium">
                  In-Game Name
                </Label>
                <Input
                  value={form.inGameName}
                  onChange={update("inGameName")}
                  placeholder="Your in-game name"
                  className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb]"
                  data-ocid="join.input"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[#64748b] text-xs font-medium">
                  Experience
                </Label>
                <Textarea
                  value={form.experience}
                  onChange={update("experience")}
                  placeholder="Describe your gaming experience, previous alliances, skills..."
                  rows={3}
                  className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb] resize-none"
                  data-ocid="join.textarea"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[#64748b] text-xs font-medium">
                  Why Do You Want to Join DPSP?
                </Label>
                <Textarea
                  value={form.whyJoin}
                  onChange={update("whyJoin")}
                  placeholder="Tell us why you want to be part of DPSP Alliance Community..."
                  rows={4}
                  className="bg-white border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#2563eb] resize-none"
                  data-ocid="join.textarea"
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
                data-ocid="join.submit_button"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting\u2026
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          )}
        </SectionReveal>
      </div>
    </main>
  );
}
