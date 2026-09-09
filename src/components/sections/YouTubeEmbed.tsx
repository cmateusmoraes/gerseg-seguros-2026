"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  /** URL completa de embed, ex.: https://www.youtube.com/embed/xyz */
  src: string;
  title: string;
  posterSrc?: string;
}

/** Player leve: nenhum recurso do YouTube é baixado antes da interação. */
export function YouTubeEmbed({ src, title, posterSrc }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const privacySrc = src.replace("www.youtube.com", "www.youtube-nocookie.com");
  const separator = privacySrc.includes("?") ? "&" : "?";

  return (
    <div className="relative aspect-video overflow-hidden rounded-img border border-line bg-navy">
      {isPlaying ? (
        <iframe
          src={`${privacySrc}${separator}autoplay=1`}
          title={title}
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Reproduzir vídeo: ${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden text-white"
        >
          {posterSrc && (
            <Image
              src={posterSrc}
              alt=""
              fill
              sizes="(min-width: 980px) 800px, 90vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
            />
          )}
          <span aria-hidden className="absolute inset-0 bg-navy/55 transition-colors duration-300 group-hover:bg-navy/45" />
          <span className="relative flex items-center gap-3 rounded-full border border-white/60 bg-navy/80 px-5 py-3 text-xs font-medium shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-whatsapp text-white">
              <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
            </span>
            Assistir ao vídeo
          </span>
        </button>
      )}
    </div>
  );
}
