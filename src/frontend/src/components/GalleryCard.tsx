interface GalleryCardProps {
  title: string;
  category: string;
  gradient: string;
  index?: number;
}

export default function GalleryCard({
  title,
  category,
  gradient,
  index = 0,
}: GalleryCardProps) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-[#e2e8f0] cursor-pointer
        transition-all duration-300 hover:border-[rgba(209,27,42,0.4)]
        hover:shadow-[0_0_24px_rgba(209,27,42,0.12),0_8px_32px_rgba(0,0,0,0.12)]"
      data-ocid={`gallery.item.${index + 1}`}
    >
      {/* Thumbnail area */}
      <div className="relative overflow-hidden aspect-video">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ background: gradient }}
        />
        {/* Crimson overlay on hover */}
        <div className="absolute inset-0 bg-[rgba(209,27,42,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-md bg-white/80 text-[var(--text-muted)] backdrop-blur-sm border border-[#e2e8f0]">
          {category}
        </span>
      </div>

      {/* Caption */}
      <div className="p-4 bg-white">
        <p className="text-[var(--text-primary)] font-medium text-sm group-hover:text-[#D11B2A] transition-colors">
          {title}
        </p>
      </div>
    </div>
  );
}
