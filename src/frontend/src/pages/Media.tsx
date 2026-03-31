import { X } from "lucide-react";
import { useState } from "react";
import SectionReveal from "../components/SectionReveal";

const mediaImages = [
  { src: "/media/media1.jpg", alt: "Alliance moment 1" },
  { src: "/media/media2.jpg", alt: "Alliance moment 2" },
  { src: "/media/media3.jpg", alt: "Alliance moment 3" },
  { src: "/media/media4.jpg", alt: "Alliance moment 4" },
  { src: "/media/media5.jpg", alt: "Alliance moment 5" },
  { src: "/media/media6.jpg", alt: "Alliance moment 6" },
  { src: "/media/media7.jpg", alt: "Alliance moment 7" },
  { src: "/media/media8.jpg", alt: "Alliance moment 8" },
  { src: "/media/media9.jpg", alt: "Alliance moment 9" },
];

export default function Media() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = () => setLightbox(null);

  return (
    <main className="min-h-screen animate-page-enter">
      {/* Hero Header */}
      <section className="relative flex items-center justify-center min-h-[38vh] overflow-hidden">
        <div className="aurora-bg w-full h-full">
          <div className="animated-mesh-bg absolute inset-0" />
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(15,23,42,0.6) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 pt-20 pb-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#38bdf8] mb-3">
            Visual Archive
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black text-white uppercase"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: "0 0 30px rgba(37,99,235,0.5)",
            }}
          >
            MEDIA GALLERY
          </h1>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            Alliance moments captured in action
          </p>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #f8fafc)",
          }}
        />
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionReveal
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {mediaImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative block w-full rounded-2xl overflow-hidden aspect-video
                cursor-pointer transition-all duration-300
                hover:scale-[1.03]"
              style={{
                boxShadow:
                  "0 2px 16px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 2px #38bdf8, 0 8px 32px rgba(56,189,248,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 16px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.06)";
              }}
              data-ocid={`media.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0f172a] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          ))}
        </SectionReveal>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
          data-ocid="media.modal"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center
              rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
            aria-label="Close lightbox"
            data-ocid="media.close_button"
          >
            <X size={20} />
          </button>
          <div
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            className="flex items-center justify-center"
          >
            <img
              src={mediaImages[lightbox].src}
              alt={mediaImages[lightbox].alt}
              className="max-w-full max-h-[88vh] rounded-xl object-contain"
              style={{ boxShadow: "0 0 60px rgba(56,189,248,0.2)" }}
            />
          </div>
          {/* Prev / Next */}
          {lightbox > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors text-xl"
              aria-label="Previous image"
              data-ocid="media.pagination_prev"
            >
              ‹
            </button>
          )}
          {lightbox < mediaImages.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox + 1);
              }}
              className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors text-xl"
              aria-label="Next image"
              data-ocid="media.pagination_next"
            >
              ›
            </button>
          )}
        </div>
      )}
    </main>
  );
}
