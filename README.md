# Editorial Portfolio (GitHub Pages)

Минималистичное редакционное портфолио с горизонтальной витриной на десктопе, фиксированным `-90deg` сайдбаром, автосворачиванием меню при скролле, страницей кейса и Visual Diary.

## Локальный запуск

```bash
npm install
npm run dev
```

## Как наполнить своими проектами

1. **Имя, био и контакты:** отредактируйте `src/data/site.ts`.
2. **Проекты:** отредактируйте массив `PROJECTS` в `src/data/projects.ts`.
   - Кладите оптимизированные WebP-фото и короткие MP4-видео в `public/media/<slug>/` и указывайте пути вида `media/cose/cover.webp` (или внешние URL с Cloudflare R2).
   - Поддерживаются оба типа медиа: `kind: 'image'` и `kind: 'video'`.
3. **Visual Diary:** отредактируйте `src/data/diary.ts`.
4. **Шрифт:** по умолчанию подключён *Newsreader Light* (Google Fonts). Если есть локальный `TimesNow-Light.woff2`, положите его в `public/fonts/` и раскомментируйте `@font-face` в `src/styles/tokens.css`.

## Бесплатный деплой на GitHub Pages

1. Создайте репозиторий на GitHub (например, `username.github.io` для корня домена или `portfolio` для `username.github.io/portfolio/`).
2. Запушьте код в ветку `main`:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO>.git
   git push -u origin main
   ```
3. В настройках репозитория откройте **Settings → Pages → Source: GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` сам соберёт проект и опубликует сайт.
