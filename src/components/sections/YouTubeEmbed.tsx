interface YouTubeEmbedProps {
  /** URL completa de embed, ex.: https://www.youtube.com/embed/xyz */
  src: string;
  title: string;
}

/** Embed responsivo 16:9 do YouTube com lazy loading. */
export function YouTubeEmbed({ src, title }: YouTubeEmbedProps) {
  return (
    <div className="overflow-hidden rounded-img border border-line">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="aspect-video w-full"
      />
    </div>
  );
}
