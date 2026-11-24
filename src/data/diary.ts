export interface DiaryItem {
  id: string;
  thumb: string;
  large: string;
  caption: string;
}

const resolveUrl = (url: string): string =>
  /^https?:\/\//.test(url) ? url : `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;

const RAW_DIARY_ITEMS: DiaryItem[] = [
  {
    "id": "archive-1",
    "thumb": "media/thumb/SNlOgMrzRCRlvxpMteFnQGIcSlg.webp",
    "large": "media/full/SNlOgMrzRCRlvxpMteFnQGIcSlg.webp",
    "caption": "Archive 01"
  },
  {
    "id": "archive-2",
    "thumb": "media/thumb/c8FjoE3lgxvN4Otz4dKdV9S9gUc.webp",
    "large": "media/full/c8FjoE3lgxvN4Otz4dKdV9S9gUc.webp",
    "caption": "Archive 02"
  },
  {
    "id": "archive-3",
    "thumb": "media/thumb/4Vj3kRcZt8yzALhTZWHm09W2058.webp",
    "large": "media/full/4Vj3kRcZt8yzALhTZWHm09W2058.webp",
    "caption": "Archive 03"
  },
  {
    "id": "archive-4",
    "thumb": "media/thumb/PvulNt14pwQe12ZuvyXwIXpjB40.webp",
    "large": "media/full/PvulNt14pwQe12ZuvyXwIXpjB40.webp",
    "caption": "Archive 04"
  },
  {
    "id": "archive-5",
    "thumb": "media/thumb/3eWYQOdpWmbqs07Mw6alZhy3tFI.webp",
    "large": "media/full/3eWYQOdpWmbqs07Mw6alZhy3tFI.webp",
    "caption": "Archive 05"
  },
  {
    "id": "archive-6",
    "thumb": "media/thumb/tTmQfJE0OloNdvANCuoLRfXGBTo.webp",
    "large": "media/full/tTmQfJE0OloNdvANCuoLRfXGBTo.webp",
    "caption": "Archive 06"
  },
  {
    "id": "archive-7",
    "thumb": "media/thumb/4hVDyKjMZXKPmLIP8D8HSF11olw.webp",
    "large": "media/full/4hVDyKjMZXKPmLIP8D8HSF11olw.webp",
    "caption": "Archive 07"
  },
  {
    "id": "archive-8",
    "thumb": "media/thumb/Wk1DHwsEuZpAl2YExcJi0yFwR8.webp",
    "large": "media/full/Wk1DHwsEuZpAl2YExcJi0yFwR8.webp",
    "caption": "Archive 08"
  },
  {
    "id": "diary-kintsugi-jewelry-9",
    "thumb": "media/thumb/V1TS935v2yI2tXch4Axefm6Sc.webp",
    "large": "media/full/V1TS935v2yI2tXch4Axefm6Sc.webp",
    "caption": "Kintsugi Jewelry — 2024"
  },
  {
    "id": "diary-kintsugi-jewelry-10",
    "thumb": "media/thumb/1v1LjK59Yc25kqk67g2ZAbUmao.webp",
    "large": "media/full/1v1LjK59Yc25kqk67g2ZAbUmao.webp",
    "caption": "Kintsugi Jewelry — 2024"
  },
  {
    "id": "diary-natura-siberica-11",
    "thumb": "media/thumb/SYwWdd0cmA51yDRsZjbhnLSsZs.webp",
    "large": "media/full/SYwWdd0cmA51yDRsZjbhnLSsZs.webp",
    "caption": "Natura Siberica — 2024"
  },
  {
    "id": "diary-natura-siberica-12",
    "thumb": "media/thumb/POhVhCz9dI9JfnCCCtGcaxx8U.webp",
    "large": "media/full/POhVhCz9dI9JfnCCCtGcaxx8U.webp",
    "caption": "Natura Siberica — 2024"
  },
  {
    "id": "diary-demix-x-aytlo-13",
    "thumb": "media/thumb/PLK27lk25nedMzuFopexRzf2bNE.webp",
    "large": "media/full/PLK27lk25nedMzuFopexRzf2bNE.webp",
    "caption": "Demix × Outlaw — 2025"
  },
  {
    "id": "diary-demix-x-aytlo-14",
    "thumb": "media/thumb/45WC9r0hm766ow49omjBlquIQ.webp",
    "large": "media/full/45WC9r0hm766ow49omjBlquIQ.webp",
    "caption": "Demix × Outlaw — 2025"
  },
  {
    "id": "diary-void-15",
    "thumb": "media/thumb/SRxK8L7M7FoScWNF8xXROykZc.webp",
    "large": "media/full/SRxK8L7M7FoScWNF8xXROykZc.webp",
    "caption": "VOID — 2024"
  },
  {
    "id": "diary-void-16",
    "thumb": "media/thumb/w2StFmS9WLrVrUMOlJXmpsjguE.webp",
    "large": "media/full/w2StFmS9WLrVrUMOlJXmpsjguE.webp",
    "caption": "VOID — 2024"
  },
  {
    "id": "diary-9mice-17",
    "thumb": "media/thumb/gkDwCbagAyyuiYKPZow2Io8D5Q.webp",
    "large": "media/full/gkDwCbagAyyuiYKPZow2Io8D5Q.webp",
    "caption": "9mice Afterparty — 2024"
  },
  {
    "id": "diary-9mice-18",
    "thumb": "media/thumb/3IDnaDhZE6D7WGOqRoB0uRoNSoU.webp",
    "large": "media/full/3IDnaDhZE6D7WGOqRoB0uRoNSoU.webp",
    "caption": "9mice Afterparty — 2024"
  },
  {
    "id": "diary-aperol-19",
    "thumb": "media/thumb/fri1n27wQOuJB7NDw5rIiA9dIE.webp",
    "large": "media/full/fri1n27wQOuJB7NDw5rIiA9dIE.webp",
    "caption": "Aperol — 2024"
  },
  {
    "id": "diary-aperol-20",
    "thumb": "media/thumb/ffBoaFBGUgESplWykvwdUYdIoW4.webp",
    "large": "media/full/ffBoaFBGUgESplWykvwdUYdIoW4.webp",
    "caption": "Aperol — 2024"
  },
  {
    "id": "diary-music-typography-research-book-21",
    "thumb": "media/thumb/iW6HK8ofJ0QCCXCNaWYvbIHthU.webp",
    "large": "media/full/iW6HK8ofJ0QCCXCNaWYvbIHthU.webp",
    "caption": "Music Typography — 2024"
  },
  {
    "id": "diary-music-typography-research-book-22",
    "thumb": "media/thumb/mPVfqBQOx72Wn9MoSlz685ze81w.webp",
    "large": "media/full/mPVfqBQOx72Wn9MoSlz685ze81w.webp",
    "caption": "Music Typography — 2024"
  },
  {
    "id": "diary-glofi-23",
    "thumb": "media/thumb/6V4gWyR0X2IP4mwfHQCvIDNJaao.webp",
    "large": "media/full/6V4gWyR0X2IP4mwfHQCvIDNJaao.webp",
    "caption": "Glofi — 2024"
  },
  {
    "id": "diary-glofi-24",
    "thumb": "media/thumb/PKfVggObweFPjEuvx21aUr4IDU.webp",
    "large": "media/full/PKfVggObweFPjEuvx21aUr4IDU.webp",
    "caption": "Glofi — 2024"
  },
  {
    "id": "diary-zavernite-25",
    "thumb": "media/thumb/1Vkmg9ur3ieqaKscM0RwtwBtiM.webp",
    "large": "media/full/1Vkmg9ur3ieqaKscM0RwtwBtiM.webp",
    "caption": "Zavernite — 2024"
  },
  {
    "id": "diary-zavernite-26",
    "thumb": "media/thumb/vCs8pgMpdYD5j4hOwCKJpmWpWY.webp",
    "large": "media/full/vCs8pgMpdYD5j4hOwCKJpmWpWY.webp",
    "caption": "Zavernite — 2024"
  },
  {
    "id": "diary-4-27",
    "thumb": "media/thumb/kFime9bbPngJX9rKBb84EtEIM.webp",
    "large": "media/full/kFime9bbPngJX9rKBb84EtEIM.webp",
    "caption": "4 (MV) — 2025"
  },
  {
    "id": "diary-4-28",
    "thumb": "media/thumb/jGp1GUMrn4W3B4rZwM2nFyKa4tk.webp",
    "large": "media/full/jGp1GUMrn4W3B4rZwM2nFyKa4tk.webp",
    "caption": "4 (MV) — 2025"
  },
  {
    "id": "diary-modular-29",
    "thumb": "media/thumb/N1OHA0IIuPbhqQaIxnKKvt35dY.webp",
    "large": "media/full/N1OHA0IIuPbhqQaIxnKKvt35dY.webp",
    "caption": "Modular — 2024"
  },
  {
    "id": "diary-modular-30",
    "thumb": "media/thumb/QvwuGfauW6TkwaWQELPVbaQgL4.webp",
    "large": "media/full/QvwuGfauW6TkwaWQELPVbaQgL4.webp",
    "caption": "Modular — 2024"
  },
  {
    "id": "diary-nn-creative-31",
    "thumb": "media/thumb/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.webp",
    "large": "media/full/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.webp",
    "caption": "NN Creative — 2024"
  },
  {
    "id": "diary-nn-creative-32",
    "thumb": "media/thumb/NOWdh92mM9cqzf2YfamqFFSzYjw.webp",
    "large": "media/full/NOWdh92mM9cqzf2YfamqFFSzYjw.webp",
    "caption": "NN Creative — 2024"
  }
];

export const DIARY_ITEMS: DiaryItem[] = RAW_DIARY_ITEMS.map((item) => ({
  ...item,
  thumb: resolveUrl(item.thumb),
  large: resolveUrl(item.large),
}));
