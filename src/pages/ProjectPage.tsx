import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug, PROJECTS } from '../data/projects';
import { MediaItem } from '../components/MediaItem';

const IMAGE_AUTOPLAY_MS = 4500;
const VIDEO_AUTOPLAY_MS = 8000;

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = (slug ? getProjectBySlug(slug) : undefined) ?? PROJECTS[0];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    window.scrollTo(0, 0);
  }, [project.slug]);

  const total = project.slides.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev]);

  const currentSlide = project.slides[index] ?? project.slides[0];

  // Preload adjacent image slides so clicking NEXT/PREV is instant
  useEffect(() => {
    if (total <= 1) return;
    const neighborIndices = [(index + 1) % total, (index - 1 + total) % total];
    for (const i of neighborIndices) {
      const slide = project.slides[i];
      if (slide && slide.kind === 'image') {
        const img = new Image();
        img.src = slide.src;
      }
    }
  }, [index, total, project.slides]);

  // Auto-advance on inactivity (resets on any slide change; pauses when tab is hidden)
  useEffect(() => {
    if (total <= 1) return;
    const delay =
      currentSlide.kind === 'video' ? VIDEO_AUTOPLAY_MS : IMAGE_AUTOPLAY_MS;

    let timerId: number | undefined;

    const schedule = () => {
      window.clearTimeout(timerId);
      if (!document.hidden) {
        timerId = window.setTimeout(next, delay);
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.clearTimeout(timerId);
      } else {
        schedule();
      }
    };

    schedule();
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [index, total, currentSlide.kind, next]);

  return (
    <main className="project-page">
      <article className="project-stage">
        <div
          className="project-viewer"
          onClick={next}
          role="button"
          tabIndex={0}
          aria-label={`Next image (${index + 1} of ${total})`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              next();
            }
          }}
        >
          <MediaItem
            key={currentSlide.id}
            kind={currentSlide.kind}
            src={currentSlide.src}
            poster={currentSlide.poster}
            alt={currentSlide.alt}
            loading="eager"
            fetchPriority="high"
            className="project-viewer__media"
          />
        </div>

        <aside className="project-credits">
          <div className="project-credits__header">
            <h1 className="project-credits__title">
              {project.roman} &nbsp; {project.client}
            </h1>
            <span>{project.year}</span>
          </div>

          <div className="project-credits__row">
            <p>{currentSlide.role || project.category}</p>
            {currentSlide.credits && <p>{currentSlide.credits}</p>}
          </div>

          {project.description && (
            <p className="project-credits__description">
              {project.description}
            </p>
          )}

          <div className="project-credits__controls">
            <button type="button" onClick={prev}>
              PREV
            </button>
            <span>
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </span>
            <button type="button" onClick={next}>
              NEXT
            </button>
            <Link to="/" style={{ marginLeft: 'auto' }}>
              INDEX
            </Link>
          </div>
        </aside>
      </article>
    </main>
  );
}
