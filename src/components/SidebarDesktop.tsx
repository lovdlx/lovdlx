import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';

interface SidebarDesktopProps {
  isCollapsed: boolean;
  onExpandRequest?: () => void;
}

export function SidebarDesktop({
  isCollapsed,
  onExpandRequest,
}: SidebarDesktopProps) {
  const location = useLocation();
  const [titleHovered, setTitleHovered] = useState(false);

  const handleHeadingClick = () => {
    if (isCollapsed && onExpandRequest) {
      onExpandRequest();
    }
  };

  return (
    <aside
      aria-label="Primary navigation"
      className={[
        'sidebar-desktop',
        isCollapsed ? 'is-collapsed' : '',
        titleHovered ? 'is-title-hovered' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <nav className="sidebar-desktop__rotated">
        {/* Column 1: INFO (bottom-left of screen after -90deg rotation) */}
        <div className="sidebar-col">
          <button
            type="button"
            className="sidebar-col__heading"
            onClick={handleHeadingClick}
          >
            [INFO]
          </button>
          <ul className="sidebar-sub">
            <li>
              <p>
                {SITE.bioLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < SITE.bioLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </li>
          </ul>
        </div>

        {/* Column 2: CLIENTS */}
        <div className="sidebar-col">
          <button
            type="button"
            className="sidebar-col__heading"
            onClick={handleHeadingClick}
          >
            [CLIENTS]
          </button>
          <ul className="sidebar-sub">
            {PROJECTS.map((project) => {
              const isActive = location.pathname === `/project/${project.slug}`;
              return (
                <li key={project.id} className="sidebar-client-item">
                  <Link to={`/project/${project.slug}`}>
                    <span className="sidebar-client-item__roman">
                      {project.roman}
                    </span>
                    <span
                      className={`sidebar-client-item__name ${
                        isActive ? 'is-active' : ''
                      }`}
                    >
                      {project.client}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3: CONTACTS + VISUAL DIARY */}
        <div className="sidebar-col">
          <button
            type="button"
            className="sidebar-col__heading"
            onClick={handleHeadingClick}
          >
            [CONTACTS]
          </button>
          <ul className="sidebar-sub">
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
          </ul>

          {SITE.secondaryLinkLabel && SITE.secondaryLinkUrl && (
            <ul className="sidebar-sub sidebar-sub--extra">
              <li>
                <a
                  href={SITE.secondaryLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.secondaryLinkLabel}
                </a>
              </li>
            </ul>
          )}

          <ul className="sidebar-sub sidebar-sub--extra">
            <li>
              <Link to="/visual-diary">{SITE.visualDiaryLabel}</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: SITE TITLE (top-left of screen after -90deg rotation) */}
        <div className="sidebar-col sidebar-title-col">
          <Link
            to="/"
            className="sidebar-title-link"
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}
          >
            <h1>
              <span className="sidebar-title-stretch">[{SITE.name}]</span>
            </h1>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
