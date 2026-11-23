import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';

export function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <header className="header-mobile">
        <Link to="/">[{SITE.name}]</Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen(true)}
        >
          [MENU]
        </button>
      </header>

      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer__top">
          <Link to="/" onClick={() => setOpen(false)}>
            [{SITE.name}]
          </Link>
          <button type="button" onClick={() => setOpen(false)}>
            [CLOSE]
          </button>
        </div>

        <section className="mobile-drawer__section">
          <p className="mobile-drawer__label">[INFO]</p>
          <p>
            {SITE.bioLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < SITE.bioLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>

        <section className="mobile-drawer__section">
          <p className="mobile-drawer__label">[CLIENTS]</p>
          <ul className="mobile-drawer__clients">
            {PROJECTS.map((project) => (
              <li key={project.id}>
                <Link
                  to={`/project/${project.slug}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="mobile-drawer__roman">{project.roman}</span>
                  <span>{project.client}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mobile-drawer__section">
          <p className="mobile-drawer__label">[CONTACTS]</p>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.instagramHandle}
              </a>
            </li>
            {SITE.telegramHandle && SITE.telegramUrl && (
              <li>
                <a
                  href={SITE.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.telegramHandle}
                </a>
              </li>
            )}
            {SITE.secondaryLinkLabel && SITE.secondaryLinkUrl && (
              <li style={{ marginTop: 12 }}>
                <a
                  href={SITE.secondaryLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.secondaryLinkLabel}
                </a>
              </li>
            )}
            <li style={{ marginTop: 12 }}>
              <Link to="/visual-diary" onClick={() => setOpen(false)}>
                {SITE.visualDiaryLabel}
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
