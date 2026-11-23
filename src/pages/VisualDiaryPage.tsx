import { useState } from 'react';
import { DIARY_ITEMS, type DiaryItem } from '../data/diary';

export function VisualDiaryPage() {
  const [hovered, setHovered] = useState<DiaryItem | null>(null);

  return (
    <main className="diary-page" aria-label="Visual Diary">
      <div
        className={`diary-preview ${hovered ? 'is-visible' : ''}`}
        aria-hidden="true"
      >
        {hovered && <img src={hovered.large} alt={hovered.caption} />}
      </div>

      <div className="diary-grid">
        {DIARY_ITEMS.map((item) => (
          <figure
            key={item.id}
            className="diary-tile"
            style={{ margin: 0 }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={item.thumb}
              alt={item.caption}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
