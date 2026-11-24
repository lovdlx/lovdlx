import type { MediaKind } from '../data/projects';

interface MediaItemProps {
  kind: MediaKind;
  src: string;
  poster?: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function MediaItem({
  kind,
  src,
  poster,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
}: MediaItemProps) {
  if (kind === 'video') {
    return (
      <video
        className={className}
        src={src}
        poster={poster}
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
      />
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  );
}
