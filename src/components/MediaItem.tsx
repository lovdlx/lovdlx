import type { MediaKind } from '../data/projects';

interface MediaItemProps {
  kind: MediaKind;
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaItem({
  kind,
  src,
  alt,
  className,
  loading = 'lazy',
}: MediaItemProps) {
  if (kind === 'video') {
    return (
      <video
        className={className}
        src={src}
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
    />
  );
}
