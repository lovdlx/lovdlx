import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { MediaItem } from '../components/MediaItem';

interface HomePageProps {
  onScrollCollapseChange: (collapsed: boolean) => void;
  registerScrollReset: (fn: () => void) => void;
}

export function HomePage({
  onScrollCollapseChange,
  registerScrollReset,
}: HomePageProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [backdropSrc, setBackdropSrc] = useState<string | null>(null);

  useEffect(() => {
    registerScrollReset(() => {
      scrollerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    });
    return () => {
      onScrollCollapseChange(false);
    };
  }, [onScrollCollapseChange, registerScrollReset]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleScroll = () => {
      onScrollCollapseChange(el.scrollLeft > 50);
    };

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 1024) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth <= 1024) return;
      if (e.key === 'ArrowRight') {
        el.scrollBy({ left: 320, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        el.scrollBy({ left: -320, behavior: 'smooth' });
      }
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    el.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      el.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onScrollCollapseChange]);

  return (
    <>
      {/* Full-screen hover backdrop */}
      <div
        className={`fullsize-backdrop ${backdropSrc ? 'is-visible' : ''}`}
        style={
          backdropSrc ? { backgroundImage: `url(${backdropSrc})` } : undefined
        }
        aria-hidden="true"
      />

      {/* Desktop horizontal editorial showcase */}
      <main
        ref={scrollerRef}
        className={`home-desktop ${hoveredProjectId ? 'has-hover' : ''}`}
        aria-label="Selected projects horizontal gallery"
      >
        <div className="home-desktop__track">
          {PROJECTS.map((project, projectIdx) => {
            const isHovered = hoveredProjectId === project.id;
            return (
              <section
                key={project.id}
                className={`project-cluster ${isHovered ? 'is-hovered' : ''}`}
                aria-label={`${project.roman} ${project.client}`}
              >
                {project.slots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`slot-box slot-box--${slot.position}`}
                    onMouseEnter={() => {
                      setHoveredProjectId(project.id);
                      setBackdropSrc(slot.fullSrc || slot.src);
                    }}
                    onMouseLeave={() => {
                      setHoveredProjectId(null);
                      setBackdropSrc(null);
                    }}
                  >
                    <Link to={`/project/${project.slug}`} className="slot-link">
                      {slot.position === 1 && (
                        <div className="slot-meta">
                          <span className="slot-meta__main">
                            <span>{project.roman}</span>
                            <span>{project.client}</span>
                          </span>
                          <span className="slot-meta__year">{project.year}</span>
                        </div>
                      )}
                      {slot.position === 2 && (
                        <div className="slot-meta slot-meta--category">
                          <span>{project.category}</span>
                        </div>
                      )}
                      <MediaItem
                        kind={slot.kind}
                        src={slot.src}
                        alt={slot.alt}
                        loading={projectIdx < 2 ? 'eager' : 'lazy'}
                        className="slot-media"
                      />
                    </Link>
                  </div>
                ))}
              </section>
            );
          })}
        </div>
      </main>

      {/* Mobile vertical feed (< 1024px) */}
      <main className="home-mobile" aria-label="Selected projects">
        {PROJECTS.map((project, idx) => {
          const lead = project.slots[0];
          if (!lead) return null;
          return (
            <article key={project.id} className="mobile-card">
              <Link to={`/project/${project.slug}`}>
                <MediaItem
                  kind={lead.kind}
                  src={lead.src}
                  alt={lead.alt}
                  loading={idx < 2 ? 'eager' : 'lazy'}
                  className="mobile-card__media"
                />
                <div className="mobile-card__caption">
                  <p>{project.category}</p>
                  <div className="mobile-card__row">
                    <span className="mobile-card__roman">{project.roman}</span>
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </main>
    </>
  );
}
