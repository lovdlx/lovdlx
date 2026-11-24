export type MediaKind = 'image' | 'video';

export interface ProjectSlot {
  id: string;
  kind: MediaKind;
  src: string;
  fullSrc?: string;
  poster?: string;
  alt: string;
  orientation?: 'vertical' | 'horizontal';
  /** Slot position in the desktop cluster: 1=top, 2=bottom */
  position: 1 | 2 | 3 | 4;
}

export interface ProjectSlide {
  id: string;
  kind: MediaKind;
  src: string;
  poster?: string;
  alt: string;
  orientation?: 'vertical' | 'horizontal' | 'square';
  role?: string;
  credits?: string;
}

export interface Project {
  id: string;
  roman: string;
  slug: string;
  client: string;
  year: string;
  category: string;
  description?: string;
  slots: ProjectSlot[];
  slides: ProjectSlide[];
}

const resolveUrl = (url: string): string =>
  /^https?:\/\//.test(url) ? url : `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;

const RAW_PROJECTS: Project[] = [
  {
    "id": "client-1",
    "roman": "I",
    "slug": "echotypes-art-direction",
    "client": "Echotypes Art Direction",
    "year": "2025",
    "category": "Art Direction & Brand Positioning",
    "description": "Art direction, brand positioning, and visual communication system for Echotypes — an independent Moscow music event series hosted at fābula HQ.\n\nThe project focused on defining a cohesive cultural positioning and visual language across recurring editions (Volume01, Echotypes Live). I developed the key visuals, typographic hierarchy, and digital communication materials — combining raw flash photography, blackletter and neo-grotesque typography, and stark editorial contrast to build a recognizable voice within the local underground music scene.",
    "slots": [
      {
        "id": "echotypes-s1",
        "kind": "image",
        "src": "media/thumb/echotypes_01.webp",
        "fullSrc": "media/full/echotypes_01.webp",
        "alt": "Echotypes Live — key visual 01",
        "position": 1
      },
      {
        "id": "echotypes-s2",
        "kind": "image",
        "src": "media/thumb/echotypes_04.webp",
        "fullSrc": "media/full/echotypes_04.webp",
        "alt": "Echotypes Live — key visual 02",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "echotypes-sl1",
        "kind": "image",
        "src": "media/full/echotypes_01.webp",
        "alt": "Echotypes Live — key visual 01",
        "role": "Art Direction, Key Visuals & Brand Positioning",
        "credits": "Semyon Shvetsov · fābula HQ, Moscow"
      },
      {
        "id": "echotypes-sl2",
        "kind": "image",
        "src": "media/full/echotypes_04.webp",
        "alt": "Echotypes Live — red/white key visual",
        "role": "Key Visual & Communication System",
        "credits": "Semyon Shvetsov · fābula HQ, Moscow"
      },
      {
        "id": "echotypes-sl3",
        "kind": "image",
        "src": "media/full/echotypes_03.webp",
        "alt": "Echotypes — lineup poster",
        "role": "Art Direction & Poster Design",
        "credits": "Semyon Shvetsov · fābula HQ, Moscow"
      },
      {
        "id": "echotypes-sl4",
        "kind": "image",
        "src": "media/full/echotypes_02.webp",
        "alt": "Volume01 — lineup poster",
        "role": "Brand Positioning & Visual Communications",
        "credits": "Semyon Shvetsov · fābula HQ, Moscow"
      }
    ]
  },
  {
    "id": "client-2",
    "roman": "II",
    "slug": "kintsugi-jewelry",
    "client": "Kintsugi Jewelry",
    "year": "2024",
    "category": "Brand Platform & Art Direction",
    "description": "Branding and Visual Identity for a Portuguese based brand\n\nKintsugi Jewelry is a Russian-Portuguese jewelry brand actively gaining momentum among independent and avant-garde jewelry designers. From its very beginning, the brand has confidently won the love and trust of consumers, being famous for its unique approach to jewelry creation.\n\nKintsugi is the Japanese art of restoring ceramic pieces using a lacquer derived from the sap of the lacquer tree mixed with gold, silver or platinum powder. The jewelry uses an identical technique that no other jeweler around the world uses. In addition, it is common to use “salt and pepper” stones in the jewelry, which include dust particles that create a unique filling within the stone that is one-of-a-kind. Each piece of Kintsugi Jewelry is handmade and unique, as there is no identical piece due to the technology used.",
    "slots": [
      {
        "id": "kintsugi-jewelry-s1",
        "kind": "video",
        "src": "media/video/rMWSRXLRvjh5FSRBAEd1rezfbDE.mp4",
        "fullSrc": "media/full/V1TS935v2yI2tXch4Axefm6Sc.webp",
        "alt": "Kintsugi Jewelry — visual 1",
        "position": 1,
        "poster": "media/poster/rMWSRXLRvjh5FSRBAEd1rezfbDE.webp"
      },
      {
        "id": "kintsugi-jewelry-s2",
        "kind": "image",
        "src": "media/thumb/V1TS935v2yI2tXch4Axefm6Sc.webp",
        "fullSrc": "media/full/V1TS935v2yI2tXch4Axefm6Sc.webp",
        "alt": "Kintsugi Jewelry — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "kintsugi-jewelry-sl1",
        "kind": "video",
        "src": "media/video/rMWSRXLRvjh5FSRBAEd1rezfbDE.mp4",
        "alt": "Kintsugi Jewelry — slide 1",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal",
        "poster": "media/poster/rMWSRXLRvjh5FSRBAEd1rezfbDE.webp"
      },
      {
        "id": "kintsugi-jewelry-sl2",
        "kind": "image",
        "src": "media/full/V1TS935v2yI2tXch4Axefm6Sc.webp",
        "alt": "Kintsugi Jewelry — slide 2",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl3",
        "kind": "image",
        "src": "media/full/1v1LjK59Yc25kqk67g2ZAbUmao.webp",
        "alt": "Kintsugi Jewelry — slide 3",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl4",
        "kind": "image",
        "src": "media/full/lv3F7PYT1uEU9kLIHxPUj4yqo.webp",
        "alt": "Kintsugi Jewelry — slide 4",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl5",
        "kind": "image",
        "src": "media/full/715GbvvlEUFjqKc7x6A3dW9yidw.webp",
        "alt": "Kintsugi Jewelry — slide 5",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl6",
        "kind": "video",
        "src": "media/video/AK8xdTs3Xz9f7OinK7z7o5sQl2I.mp4",
        "alt": "Kintsugi Jewelry — slide 6",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal",
        "poster": "media/poster/AK8xdTs3Xz9f7OinK7z7o5sQl2I.webp"
      },
      {
        "id": "kintsugi-jewelry-sl7",
        "kind": "image",
        "src": "media/full/27mg5HrvVr4HT6KibdnTe1MWI.webp",
        "alt": "Kintsugi Jewelry — slide 7",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl8",
        "kind": "image",
        "src": "media/full/aPTst4bY9OR2YDN29IHbe8Ds0E.webp",
        "alt": "Kintsugi Jewelry — slide 8",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl9",
        "kind": "image",
        "src": "media/full/E9w4SO5Fm5kVTgedJq4Ikr1qA.webp",
        "alt": "Kintsugi Jewelry — slide 9",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl10",
        "kind": "image",
        "src": "media/full/8013weofebp31keHtcwunT7DU.webp",
        "alt": "Kintsugi Jewelry — slide 10",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl11",
        "kind": "image",
        "src": "media/full/B1xZchfsZ4mP0bEBtjRDedrD5I.webp",
        "alt": "Kintsugi Jewelry — slide 11",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl12",
        "kind": "image",
        "src": "media/full/glB9t0heK4SszLtUyvjvmWNRmwI.webp",
        "alt": "Kintsugi Jewelry — slide 12",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl13",
        "kind": "image",
        "src": "media/full/RdUQgStpdPeylyyfDKP4Famwg5Y.webp",
        "alt": "Kintsugi Jewelry — slide 13",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      }
    ]
  },
  {
    "id": "client-3",
    "roman": "III",
    "slug": "9mice",
    "client": "9mice Afterparty",
    "year": "2024",
    "category": "Art Direction & Key Visual",
    "description": "9mice (born Sergey Igorevich Dmitriev on August 27, 2000) is a Russian experimental hip-hop artist, producer, and creative director. Together with fellow musician Kai Angel, he forms the influential creative duo and aesthetic movement VIPERR , which reshaped the Russian-speaking underground and alternative rap scene in the mid-2020s.",
    "slots": [
      {
        "id": "9mice-s1",
        "kind": "image",
        "src": "media/thumb/gkDwCbagAyyuiYKPZow2Io8D5Q.webp",
        "fullSrc": "media/full/gkDwCbagAyyuiYKPZow2Io8D5Q.webp",
        "alt": "9mice Afterparty — visual 1",
        "position": 1
      },
      {
        "id": "9mice-s2",
        "kind": "image",
        "src": "media/thumb/3IDnaDhZE6D7WGOqRoB0uRoNSoU.webp",
        "fullSrc": "media/full/3IDnaDhZE6D7WGOqRoB0uRoNSoU.webp",
        "alt": "9mice Afterparty — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "9mice-sl1",
        "kind": "image",
        "src": "media/full/gkDwCbagAyyuiYKPZow2Io8D5Q.webp",
        "alt": "9mice Afterparty — slide 1",
        "role": "Key Visuals & Poster Design",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "9mice-sl2",
        "kind": "image",
        "src": "media/full/3IDnaDhZE6D7WGOqRoB0uRoNSoU.webp",
        "alt": "9mice Afterparty — slide 2",
        "role": "Key Visuals & Poster Design",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "9mice-sl3",
        "kind": "image",
        "src": "media/full/1ozrI3Faqm8113RFdpQUcLZQI.webp",
        "alt": "9mice Afterparty — slide 3",
        "role": "Key Visuals & Poster Design",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-4",
    "roman": "IV",
    "slug": "fakshiza",
    "client": "@факшиза",
    "year": "2025",
    "category": "Art Direction & Key Visual",
    "description": "Handcrafted analog key visual for rising underground artist @факшиза, created for her solo shows in Saint Petersburg (CULT) and Moscow (Dex).\n\nBuilt entirely by hand as a physical collage before scanning — combining cut-out paper lettering, raw chalk drawings on black paper, taped framing, and direct-flash portraiture. The tactile DIY approach captures the raw, unfiltered energy of the artist's sound and stands out against glossy digital event posters.",
    "slots": [
      {
        "id": "fakshiza-s1",
        "kind": "image",
        "src": "media/thumb/fakshiza_01.webp",
        "fullSrc": "media/full/fakshiza_01.webp",
        "alt": "@факшиза — handcrafted analog key visual",
        "position": 1
      }
    ],
    "slides": [
      {
        "id": "fakshiza-sl1",
        "kind": "image",
        "src": "media/full/fakshiza_01.webp",
        "alt": "@факшиза — handcrafted analog key visual",
        "role": "Art Direction & Analog Key Visual",
        "credits": "Semyon Shvetsov · Fleek Media"
      }
    ]
  },
  {
    "id": "client-5",
    "roman": "V",
    "slug": "demix-x-aytlo",
    "client": "Demix × Outlaw",
    "year": "2025",
    "category": "Visual Communication",
    "description": "A creation of visual communication materials for a new collaboration between DEMIX and OUTLAW",
    "slots": [
      {
        "id": "demix-x-aytlo-s1",
        "kind": "image",
        "src": "media/thumb/PLK27lk25nedMzuFopexRzf2bNE.webp",
        "fullSrc": "media/full/PLK27lk25nedMzuFopexRzf2bNE.webp",
        "alt": "Demix × Outlaw — visual 1",
        "position": 1
      },
      {
        "id": "demix-x-aytlo-s2",
        "kind": "image",
        "src": "media/thumb/45WC9r0hm766ow49omjBlquIQ.webp",
        "fullSrc": "media/full/45WC9r0hm766ow49omjBlquIQ.webp",
        "alt": "Demix × Outlaw — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "demix-x-aytlo-sl1",
        "kind": "image",
        "src": "media/full/PLK27lk25nedMzuFopexRzf2bNE.webp",
        "alt": "Demix × Outlaw — slide 1",
        "role": "Visual Communication & Key Visuals",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "demix-x-aytlo-sl2",
        "kind": "image",
        "src": "media/full/45WC9r0hm766ow49omjBlquIQ.webp",
        "alt": "Demix × Outlaw — slide 2",
        "role": "Visual Communication & Key Visuals",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "demix-x-aytlo-sl3",
        "kind": "image",
        "src": "media/full/WzGKVYV0Bls6nOeUc51TgNZGrqM.webp",
        "alt": "Demix × Outlaw — slide 3",
        "role": "Visual Communication & Key Visuals",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-6",
    "roman": "VI",
    "slug": "void",
    "client": "VOID",
    "year": "2024",
    "category": "Brand Identity & Art Direction",
    "description": "VOID — музыкальный фестиваль в Москве, где происходит «столкновение» жанров, акций и перфомансов. Основываясь на идее аннулирования жанровости, была разработана бренд айдентика фестиваля, стремящаяся объединить все в единый уникальный опыт.",
    "slots": [
      {
        "id": "void-s1",
        "kind": "image",
        "src": "media/thumb/SRxK8L7M7FoScWNF8xXROykZc.webp",
        "fullSrc": "media/full/SRxK8L7M7FoScWNF8xXROykZc.webp",
        "alt": "VOID — visual 1",
        "position": 1
      },
      {
        "id": "void-s2",
        "kind": "image",
        "src": "media/thumb/w2StFmS9WLrVrUMOlJXmpsjguE.webp",
        "fullSrc": "media/full/w2StFmS9WLrVrUMOlJXmpsjguE.webp",
        "alt": "VOID — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "void-sl1",
        "kind": "image",
        "src": "media/full/SRxK8L7M7FoScWNF8xXROykZc.webp",
        "alt": "VOID — slide 1",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl2",
        "kind": "image",
        "src": "media/full/w2StFmS9WLrVrUMOlJXmpsjguE.webp",
        "alt": "VOID — slide 2",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl3",
        "kind": "image",
        "src": "media/full/tuTAjKuddCY7xgM63oGAPrHWsbk.webp",
        "alt": "VOID — slide 3",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl4",
        "kind": "image",
        "src": "media/full/tQWp8diYbH664U0ZZ5uSe52NY.webp",
        "alt": "VOID — slide 4",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl5",
        "kind": "image",
        "src": "media/full/mdKULDkzFvkiqIzln1BHtoNHhh4.webp",
        "alt": "VOID — slide 5",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl6",
        "kind": "image",
        "src": "media/full/M6eILbTXt0xutkH96yxR3InjH3w.webp",
        "alt": "VOID — slide 6",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl7",
        "kind": "image",
        "src": "media/full/ddCSe0TA0UvuDBhJCkN4zswuxo.webp",
        "alt": "VOID — slide 7",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl8",
        "kind": "image",
        "src": "media/full/5r5sPkywhxb7Sco5RoOlbcUgU.webp",
        "alt": "VOID — slide 8",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl9",
        "kind": "image",
        "src": "media/full/VsNT5tMxkQR79iJdSXSU9dz9tsQ.webp",
        "alt": "VOID — slide 9",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl10",
        "kind": "image",
        "src": "media/full/WNnYtQAoRFpfXjHSDqVsHZ2Aqc.webp",
        "alt": "VOID — slide 10",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl11",
        "kind": "image",
        "src": "media/full/OQdVim2tJ7udwc5zqlb9sCXs6c.webp",
        "alt": "VOID — slide 11",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl12",
        "kind": "image",
        "src": "media/full/sELOJXA3mMuknZ6ahsXIs9awag.webp",
        "alt": "VOID — slide 12",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      }
    ]
  },
  {
    "id": "client-7",
    "roman": "VII",
    "slug": "aperol",
    "client": "Aperol",
    "year": "2024",
    "category": "Brand Activation",
    "description": "В рамках PR-активаций для бренда Aperol было разработано большое количество визуальных материалов, объектов и дизайн окружения",
    "slots": [
      {
        "id": "aperol-s1",
        "kind": "image",
        "src": "media/thumb/fri1n27wQOuJB7NDw5rIiA9dIE.webp",
        "fullSrc": "media/full/fri1n27wQOuJB7NDw5rIiA9dIE.webp",
        "alt": "Aperol — visual 1",
        "position": 1
      },
      {
        "id": "aperol-s2",
        "kind": "image",
        "src": "media/thumb/ffBoaFBGUgESplWykvwdUYdIoW4.webp",
        "fullSrc": "media/full/ffBoaFBGUgESplWykvwdUYdIoW4.webp",
        "alt": "Aperol — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "aperol-sl1",
        "kind": "image",
        "src": "media/full/fri1n27wQOuJB7NDw5rIiA9dIE.webp",
        "alt": "Aperol — slide 1",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl2",
        "kind": "image",
        "src": "media/full/ffBoaFBGUgESplWykvwdUYdIoW4.webp",
        "alt": "Aperol — slide 2",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl3",
        "kind": "image",
        "src": "media/full/A291h6Lrq6FsYpSiKGFnJguvSg.webp",
        "alt": "Aperol — slide 3",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl4",
        "kind": "image",
        "src": "media/full/2CJ1G7ktXw8LjwCIIDvBmFsNvI.webp",
        "alt": "Aperol — slide 4",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl5",
        "kind": "image",
        "src": "media/full/OCwwUoSsTyZSu8qYvJUbh6zJZE.webp",
        "alt": "Aperol — slide 5",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl6",
        "kind": "image",
        "src": "media/full/cqDaSwdmczzTwr0iDHBfjmYBWWQ.webp",
        "alt": "Aperol — slide 6",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl7",
        "kind": "image",
        "src": "media/full/l2DqnaR4YQ2eHneGqBEPnnnRIk.webp",
        "alt": "Aperol — slide 7",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      }
    ]
  },
  {
    "id": "client-8",
    "roman": "VIII",
    "slug": "natura-siberica",
    "client": "Natura Siberica",
    "year": "2024",
    "category": "Packaging Design",
    "description": "Implemented and unrealized projects created as part of the work on packaging in the Natura Siberica brand. In addition to developing concepts and visualizations, much attention was paid to prepress preparation, technical studies and high-quality implementation",
    "slots": [
      {
        "id": "natura-siberica-s1",
        "kind": "image",
        "src": "media/thumb/SYwWdd0cmA51yDRsZjbhnLSsZs.webp",
        "fullSrc": "media/full/SYwWdd0cmA51yDRsZjbhnLSsZs.webp",
        "alt": "Natura Siberica — visual 1",
        "position": 1
      },
      {
        "id": "natura-siberica-s2",
        "kind": "image",
        "src": "media/thumb/POhVhCz9dI9JfnCCCtGcaxx8U.webp",
        "fullSrc": "media/full/POhVhCz9dI9JfnCCCtGcaxx8U.webp",
        "alt": "Natura Siberica — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "natura-siberica-sl1",
        "kind": "image",
        "src": "media/full/SYwWdd0cmA51yDRsZjbhnLSsZs.webp",
        "alt": "Natura Siberica — slide 1",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl2",
        "kind": "image",
        "src": "media/full/POhVhCz9dI9JfnCCCtGcaxx8U.webp",
        "alt": "Natura Siberica — slide 2",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl3",
        "kind": "image",
        "src": "media/full/yrD1rG6XRyo6xVKyhBZmbMVTCwo.webp",
        "alt": "Natura Siberica — slide 3",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl4",
        "kind": "image",
        "src": "media/full/aMydGSb6D324jTefSLaAXB1nA.webp",
        "alt": "Natura Siberica — slide 4",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl5",
        "kind": "image",
        "src": "media/full/0eHgoaBK9IBeo5WLMNGnkzhJfY.webp",
        "alt": "Natura Siberica — slide 5",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl6",
        "kind": "image",
        "src": "media/full/p2TGOqDa7NYN77EyvaRUA7CeXs.webp",
        "alt": "Natura Siberica — slide 6",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl7",
        "kind": "image",
        "src": "media/full/yQD9Su6pXA04PsBLy5DjGhyYCc.webp",
        "alt": "Natura Siberica — slide 7",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl8",
        "kind": "image",
        "src": "media/full/yAVb2QZ0GD6U5SoMXvyLZLd49g.webp",
        "alt": "Natura Siberica — slide 8",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl9",
        "kind": "image",
        "src": "media/full/6tVtjWLxfFeDSevjoVS2Yy6YfKU.webp",
        "alt": "Natura Siberica — slide 9",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl10",
        "kind": "image",
        "src": "media/full/2cTEMneK93dWWPLzidzPapNo.webp",
        "alt": "Natura Siberica — slide 10",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl11",
        "kind": "image",
        "src": "media/full/t1ROS4OXZzNiKxKhAjWeQtbGgM.webp",
        "alt": "Natura Siberica — slide 11",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl12",
        "kind": "image",
        "src": "media/full/tkmNjnIJe6KUQhWOSP4R6DOGrkw.webp",
        "alt": "Natura Siberica — slide 12",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      }
    ]
  },
  {
    "id": "client-9",
    "roman": "IX",
    "slug": "music-typography-research-book",
    "client": "Music Typography",
    "year": "2024",
    "category": "Editorial Design",
    "description": "Typography is one of the key elements of visual communication, determining not only readability, but also the nature, emotional tone and identity of this communication. The visual research is devoted to the consideration of the typography of music posters and posters as the main element in the formation of visual identity.",
    "slots": [
      {
        "id": "music-typography-research-book-s1",
        "kind": "image",
        "src": "media/thumb/iW6HK8ofJ0QCCXCNaWYvbIHthU.webp",
        "fullSrc": "media/full/iW6HK8ofJ0QCCXCNaWYvbIHthU.webp",
        "alt": "Music Typography — visual 1",
        "position": 1
      },
      {
        "id": "music-typography-research-book-s2",
        "kind": "image",
        "src": "media/thumb/mPVfqBQOx72Wn9MoSlz685ze81w.webp",
        "fullSrc": "media/full/mPVfqBQOx72Wn9MoSlz685ze81w.webp",
        "alt": "Music Typography — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "music-typography-research-book-sl1",
        "kind": "image",
        "src": "media/full/iW6HK8ofJ0QCCXCNaWYvbIHthU.webp",
        "alt": "Music Typography — slide 1",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl2",
        "kind": "image",
        "src": "media/full/mPVfqBQOx72Wn9MoSlz685ze81w.webp",
        "alt": "Music Typography — slide 2",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl3",
        "kind": "image",
        "src": "media/full/W8mbxtLcbdTK1VN5NoK9lxhovlI.webp",
        "alt": "Music Typography — slide 3",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl4",
        "kind": "image",
        "src": "media/full/fpObAakgSaQvWC9TSm0fZDoDE.webp",
        "alt": "Music Typography — slide 4",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl5",
        "kind": "image",
        "src": "media/full/RS40LOxFkmJu9recmmIpxlLf5Y.webp",
        "alt": "Music Typography — slide 5",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl6",
        "kind": "image",
        "src": "media/full/HTroYnE19cRJyqr72lbcUex7g.webp",
        "alt": "Music Typography — slide 6",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl7",
        "kind": "image",
        "src": "media/full/TKy1qeIIOll3uTFgX8Bvu1yos.webp",
        "alt": "Music Typography — slide 7",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl8",
        "kind": "image",
        "src": "media/full/Jq3YRaVNzPTIipSjTjd32fLHDoE.webp",
        "alt": "Music Typography — slide 8",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl9",
        "kind": "image",
        "src": "media/full/uzS6oG6g34MJ2v7XtXPj0fMkR4.webp",
        "alt": "Music Typography — slide 9",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl10",
        "kind": "image",
        "src": "media/full/GXJc0FLdZTR0R9nwoynGcdJoHFw.webp",
        "alt": "Music Typography — slide 10",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl11",
        "kind": "image",
        "src": "media/full/MmErtRY6v5E040qgDdMTmZYjOug.webp",
        "alt": "Music Typography — slide 11",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl12",
        "kind": "image",
        "src": "media/full/akiPXF1emPBvrUD8GCswP3AFnI.webp",
        "alt": "Music Typography — slide 12",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-10",
    "roman": "X",
    "slug": "glofi",
    "client": "Glofi",
    "year": "2024",
    "category": "Visual Identity",
    "description": "Glofi is an artificial intelligence—based platform that helps brands, agencies, and startups create ideas and complete the process.\n\nThe metaphor of the \"space of ideas\" became the main one for the style, which is expressed and executed using the image of a ray of light, thereby fully supporting the idea and goals of the brand.",
    "slots": [
      {
        "id": "glofi-s1",
        "kind": "video",
        "src": "media/video/lBuM5Ah1pGI4GB7uBDvGVjig2zM.mp4",
        "fullSrc": "media/full/6V4gWyR0X2IP4mwfHQCvIDNJaao.webp",
        "alt": "Glofi — visual 1",
        "position": 1,
        "poster": "media/poster/lBuM5Ah1pGI4GB7uBDvGVjig2zM.webp"
      },
      {
        "id": "glofi-s2",
        "kind": "image",
        "src": "media/thumb/6V4gWyR0X2IP4mwfHQCvIDNJaao.webp",
        "fullSrc": "media/full/6V4gWyR0X2IP4mwfHQCvIDNJaao.webp",
        "alt": "Glofi — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "glofi-sl1",
        "kind": "video",
        "src": "media/video/lBuM5Ah1pGI4GB7uBDvGVjig2zM.mp4",
        "alt": "Glofi — slide 1",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov",
        "poster": "media/poster/lBuM5Ah1pGI4GB7uBDvGVjig2zM.webp"
      },
      {
        "id": "glofi-sl2",
        "kind": "image",
        "src": "media/full/6V4gWyR0X2IP4mwfHQCvIDNJaao.webp",
        "alt": "Glofi — slide 2",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl3",
        "kind": "image",
        "src": "media/full/PKfVggObweFPjEuvx21aUr4IDU.webp",
        "alt": "Glofi — slide 3",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl4",
        "kind": "image",
        "src": "media/full/YBcjJL3a6cUQRveZbyFUkosMFKE.webp",
        "alt": "Glofi — slide 4",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl5",
        "kind": "image",
        "src": "media/full/Oj3qT9sopUsaHEQyLeTL35s2dQ.webp",
        "alt": "Glofi — slide 5",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl6",
        "kind": "image",
        "src": "media/full/2YITc3SpewT0dL5LFW1T1ZIXeB8.webp",
        "alt": "Glofi — slide 6",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl7",
        "kind": "image",
        "src": "media/full/mLUEOY043XeZrKsWxBimPUlqlU.webp",
        "alt": "Glofi — slide 7",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl8",
        "kind": "image",
        "src": "media/full/scn96dlJsCxGHnVD2neErxR7Mg.webp",
        "alt": "Glofi — slide 8",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl9",
        "kind": "image",
        "src": "media/full/OnvqLQuK3a3PK4SVWQa48hnTYk.webp",
        "alt": "Glofi — slide 9",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl10",
        "kind": "image",
        "src": "media/full/VkI5DV1z2waEqbdhIk3SWVcg8h8.webp",
        "alt": "Glofi — slide 10",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl11",
        "kind": "image",
        "src": "media/full/Eg1J80dufJMXZKiJmlZety2GFs.webp",
        "alt": "Glofi — slide 11",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl12",
        "kind": "image",
        "src": "media/full/Xhe5Qvbu524GJMzWkPsyaohYlT0.webp",
        "alt": "Glofi — slide 12",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl13",
        "kind": "image",
        "src": "media/full/EFaqVEkn1ng9aaZF1CIZ1L1rpBg.webp",
        "alt": "Glofi — slide 13",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-11",
    "roman": "XI",
    "slug": "4",
    "client": "4 (MV)",
    "year": "2025",
    "category": "Music Video",
    "description": "Brainrot and nostalgia influenced music video for a single «4» from an upcoming Benjamingotbenz's album «gits4: Flower of Life». Mixed media workflow + some AI\n\nShot: @unknwn.user296765771 + @benjamingotbenz + @ufoinmyroom AI: @benjamingotbenz + @lovdeluxe_ + @qquataree Edit: @lovdeluxe_ Produced: @unknwn.user296765771 Camera & Light Assistant: @fffyyooo Color Correction: @maveroff4 Dir: @benjamingotbenz",
    "slots": [
      {
        "id": "4-s1",
        "kind": "video",
        "src": "media/video/neafI9Wo3YwQfwliIm7SNgdasU.mp4",
        "fullSrc": "media/full/kFime9bbPngJX9rKBb84EtEIM.webp",
        "alt": "4 (MV) — visual 1",
        "position": 1,
        "poster": "media/poster/neafI9Wo3YwQfwliIm7SNgdasU.webp"
      },
      {
        "id": "4-s2",
        "kind": "image",
        "src": "media/thumb/kFime9bbPngJX9rKBb84EtEIM.webp",
        "fullSrc": "media/full/kFime9bbPngJX9rKBb84EtEIM.webp",
        "alt": "4 (MV) — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "4-sl1",
        "kind": "video",
        "src": "media/video/neafI9Wo3YwQfwliIm7SNgdasU.mp4",
        "alt": "4 (MV) — slide 1",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_",
        "poster": "media/poster/neafI9Wo3YwQfwliIm7SNgdasU.webp"
      },
      {
        "id": "4-sl2",
        "kind": "image",
        "src": "media/full/kFime9bbPngJX9rKBb84EtEIM.webp",
        "alt": "4 (MV) — slide 2",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl3",
        "kind": "image",
        "src": "media/full/jGp1GUMrn4W3B4rZwM2nFyKa4tk.webp",
        "alt": "4 (MV) — slide 3",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl4",
        "kind": "image",
        "src": "media/full/qkHv8Y5pxZvvPlrFeoC3SYclYWE.webp",
        "alt": "4 (MV) — slide 4",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl5",
        "kind": "image",
        "src": "media/full/omYmtGdsSRt2LtFZQRJruljWk.webp",
        "alt": "4 (MV) — slide 5",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl6",
        "kind": "image",
        "src": "media/full/mYUQ4LtregXOeEhzRreNpxCDBVc.webp",
        "alt": "4 (MV) — slide 6",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl7",
        "kind": "image",
        "src": "media/full/NmShHLUgfJcLFNE4RssGmKLx0k.webp",
        "alt": "4 (MV) — slide 7",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl8",
        "kind": "image",
        "src": "media/full/w2UtMnQy8C7icp12v0L3PTfVY.webp",
        "alt": "4 (MV) — slide 8",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl9",
        "kind": "image",
        "src": "media/full/SYCCMH8DYHnZBBJQMhHQRq0xCbA.webp",
        "alt": "4 (MV) — slide 9",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl10",
        "kind": "image",
        "src": "media/full/myJPDgHibHIfRBdj79zrhdWKQ4.webp",
        "alt": "4 (MV) — slide 10",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl11",
        "kind": "image",
        "src": "media/full/YcCfpaQDWSqLPasz9tYUmrRYEk.webp",
        "alt": "4 (MV) — slide 11",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl12",
        "kind": "image",
        "src": "media/full/yyMLhe7YNmNCrrCFPVRgEKdOflk.webp",
        "alt": "4 (MV) — slide 12",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl13",
        "kind": "image",
        "src": "media/full/oR3XsTM6L7o7ZBxANFvSpgrrHE.webp",
        "alt": "4 (MV) — slide 13",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      }
    ]
  },
  {
    "id": "client-12",
    "roman": "XII",
    "slug": "zavernite",
    "client": "Zavernite",
    "year": "2024",
    "category": "Rebranding",
    "description": "The rebranding of the street food café chain “Zavernite!”. As part of the project, the brand platform was updated and the visual identity of the street food café chain was redesigned. The team conducted an analysis of the market and the consumption context, clarified the target audience, their behavioral patterns and expectations, and also identified the current territory for the brand’s positioning.\n\nIn the previous version, the brand had a system in place, but some of the meanings required additional interpretation. The name “Zavernite!” It wasn’t always perceived as a direct trigger for action, which reduced the effectiveness of communication at the contact points.",
    "slots": [
      {
        "id": "zavernite-s1",
        "kind": "image",
        "src": "media/thumb/1Vkmg9ur3ieqaKscM0RwtwBtiM.webp",
        "fullSrc": "media/full/1Vkmg9ur3ieqaKscM0RwtwBtiM.webp",
        "alt": "Zavernite — visual 1",
        "position": 1
      },
      {
        "id": "zavernite-s2",
        "kind": "image",
        "src": "media/thumb/vCs8pgMpdYD5j4hOwCKJpmWpWY.webp",
        "fullSrc": "media/full/vCs8pgMpdYD5j4hOwCKJpmWpWY.webp",
        "alt": "Zavernite — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "zavernite-sl1",
        "kind": "image",
        "src": "media/full/1Vkmg9ur3ieqaKscM0RwtwBtiM.webp",
        "alt": "Zavernite — slide 1",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl2",
        "kind": "image",
        "src": "media/full/vCs8pgMpdYD5j4hOwCKJpmWpWY.webp",
        "alt": "Zavernite — slide 2",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl3",
        "kind": "image",
        "src": "media/full/1NVD1IcspKgqbEgPTBsy3e0nLb0.webp",
        "alt": "Zavernite — slide 3",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl4",
        "kind": "image",
        "src": "media/full/1QVIotrAqAhKsCAMQz4DwVrNk1Y.webp",
        "alt": "Zavernite — slide 4",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl5",
        "kind": "image",
        "src": "media/full/Akw87Xq4D7kgQ5lxO29Z7WUA8.webp",
        "alt": "Zavernite — slide 5",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl6",
        "kind": "image",
        "src": "media/full/vJbNhJi3VqUentpgTkOCj1JCPzk.webp",
        "alt": "Zavernite — slide 6",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl7",
        "kind": "image",
        "src": "media/full/LNCRNrQkHsHPRyQwYpX30CCb9U.webp",
        "alt": "Zavernite — slide 7",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl8",
        "kind": "image",
        "src": "media/full/A7NlnnPN6eaGdQI7XKEXKxPq5c.webp",
        "alt": "Zavernite — slide 8",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl9",
        "kind": "image",
        "src": "media/full/eFQhqsv0orS4GPlfZsyHM5fAlA.webp",
        "alt": "Zavernite — slide 9",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl10",
        "kind": "image",
        "src": "media/full/9u9K67Q0nYZgrZOIDci0Kaw1vg0.webp",
        "alt": "Zavernite — slide 10",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl11",
        "kind": "image",
        "src": "media/full/48qGmEVbfoLW2ijteyI8Bj4V8Sk.webp",
        "alt": "Zavernite — slide 11",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl12",
        "kind": "image",
        "src": "media/full/dOwrTiSO1G81dFScyfibbum3hzc.webp",
        "alt": "Zavernite — slide 12",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      }
    ]
  },
  {
    "id": "client-13",
    "roman": "XIII",
    "slug": "modular",
    "client": "Modular",
    "year": "2024",
    "category": "Typeface Design",
    "description": "ModularFontisafontinspiredbythecomplexworldofmodulartools.Thefontwasdevelopedusingoneofthebasicprinciplesofmodularsynthesizers:patching.Fontwillbemadepubliclyavailableafterthefinishingtouchesarecompleted:)",
    "slots": [
      {
        "id": "modular-s1",
        "kind": "image",
        "src": "media/thumb/N1OHA0IIuPbhqQaIxnKKvt35dY.webp",
        "fullSrc": "media/full/N1OHA0IIuPbhqQaIxnKKvt35dY.webp",
        "alt": "Modular — visual 1",
        "position": 1
      },
      {
        "id": "modular-s2",
        "kind": "image",
        "src": "media/thumb/QvwuGfauW6TkwaWQELPVbaQgL4.webp",
        "fullSrc": "media/full/QvwuGfauW6TkwaWQELPVbaQgL4.webp",
        "alt": "Modular — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "modular-sl1",
        "kind": "image",
        "src": "media/full/N1OHA0IIuPbhqQaIxnKKvt35dY.webp",
        "alt": "Modular — slide 1",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl2",
        "kind": "image",
        "src": "media/full/QvwuGfauW6TkwaWQELPVbaQgL4.webp",
        "alt": "Modular — slide 2",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl3",
        "kind": "image",
        "src": "media/full/XthAdjM0UCrQBG00OwoEHH7ro8.webp",
        "alt": "Modular — slide 3",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl4",
        "kind": "image",
        "src": "media/full/X37yBIGGIAc5aLvndNozvVJ5k.webp",
        "alt": "Modular — slide 4",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl5",
        "kind": "image",
        "src": "media/full/l6ZgWR6hNE1NMoepQfto91lABXU.webp",
        "alt": "Modular — slide 5",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl6",
        "kind": "image",
        "src": "media/full/AgR1ntoLG8ija5r8AyZalhS1ZcE.webp",
        "alt": "Modular — slide 6",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl7",
        "kind": "image",
        "src": "media/full/NukXDSWSEtGPcNhDW5w0rMah4.webp",
        "alt": "Modular — slide 7",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-14",
    "roman": "XIV",
    "slug": "nn-creative",
    "client": "NN Creative",
    "year": "2024",
    "category": "Visual Identity",
    "description": "VisualIdentityforNizhnyNovgorodCreativeIndustriesCompetition\n\nCreativeIndustriesoftheNizhnyNovgorodRegionisaregionalplatformforcreatinginstitutionalconditionsforthedevelopmentofcreativeindustriesintraditionalareasoftheNizhnyNovgorodregion.",
    "slots": [
      {
        "id": "nn-creative-s1",
        "kind": "image",
        "src": "media/thumb/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.webp",
        "fullSrc": "media/full/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.webp",
        "alt": "NN Creative — visual 1",
        "position": 1
      },
      {
        "id": "nn-creative-s2",
        "kind": "image",
        "src": "media/thumb/NOWdh92mM9cqzf2YfamqFFSzYjw.webp",
        "fullSrc": "media/full/NOWdh92mM9cqzf2YfamqFFSzYjw.webp",
        "alt": "NN Creative — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "nn-creative-sl1",
        "kind": "image",
        "src": "media/full/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.webp",
        "alt": "NN Creative — slide 1",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl2",
        "kind": "image",
        "src": "media/full/NOWdh92mM9cqzf2YfamqFFSzYjw.webp",
        "alt": "NN Creative — slide 2",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl3",
        "kind": "image",
        "src": "media/full/dAQmXwASffCASmiL87gB1328Jco.webp",
        "alt": "NN Creative — slide 3",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl4",
        "kind": "image",
        "src": "media/full/myf0YlJiyb80baqWa46yu57BRSw.webp",
        "alt": "NN Creative — slide 4",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl5",
        "kind": "image",
        "src": "media/full/FrKJdyLRRvy2aEhiwSKSu77EPDI.webp",
        "alt": "NN Creative — slide 5",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl6",
        "kind": "image",
        "src": "media/full/HQSoHJDyilqG7ctNsu0gZUge6Y.webp",
        "alt": "NN Creative — slide 6",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-15",
    "roman": "XV",
    "slug": "bariers",
    "client": "Bariers",
    "year": "2024",
    "category": "AI Visual Direction",
    "description": "",
    "slots": [
      {
        "id": "bariers-s1",
        "kind": "image",
        "src": "media/thumb/lPNEL5VGb5VmN0GaForZkh2TxnA.webp",
        "fullSrc": "media/full/lPNEL5VGb5VmN0GaForZkh2TxnA.webp",
        "alt": "Bariers — visual 1",
        "position": 1
      },
      {
        "id": "bariers-s2",
        "kind": "image",
        "src": "media/thumb/rOaBVqpAhWDvUbCTUblKLrHHf8.webp",
        "fullSrc": "media/full/rOaBVqpAhWDvUbCTUblKLrHHf8.webp",
        "alt": "Bariers — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "bariers-sl1",
        "kind": "image",
        "src": "media/full/lPNEL5VGb5VmN0GaForZkh2TxnA.webp",
        "alt": "Bariers — slide 1",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl2",
        "kind": "image",
        "src": "media/full/rOaBVqpAhWDvUbCTUblKLrHHf8.webp",
        "alt": "Bariers — slide 2",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl3",
        "kind": "image",
        "src": "media/full/D887oOYNyalnws0ydAVumVVJlk.webp",
        "alt": "Bariers — slide 3",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl4",
        "kind": "image",
        "src": "media/full/dpAs0coSna6HWJ8xKb9bAL22M.webp",
        "alt": "Bariers — slide 4",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl5",
        "kind": "image",
        "src": "media/full/47UsvTDjYH1DdGQy5Hko0IQ7B0.webp",
        "alt": "Bariers — slide 5",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-16",
    "roman": "XVI",
    "slug": "posters-flyers",
    "client": "Posters & Flyers",
    "year": "2024",
    "category": "Graphic Design",
    "description": "",
    "slots": [
      {
        "id": "posters-flyers-s-mainstaff",
        "kind": "image",
        "src": "media/thumb/posters_mainstaff.webp",
        "fullSrc": "media/full/posters_mainstaff.webp",
        "alt": "MAIN STAFF — Factory 3 poster",
        "position": 1
      },
      {
        "id": "posters-flyers-s1",
        "kind": "image",
        "src": "media/thumb/VUZgDhPOCzteegtluBxIqaN7hg.webp",
        "fullSrc": "media/full/VUZgDhPOCzteegtluBxIqaN7hg.webp",
        "alt": "Posters & Flyers — visual 1",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "posters-flyers-mainstaff",
        "kind": "image",
        "src": "media/full/posters_mainstaff.webp",
        "alt": "MAIN STAFF — Factory 3 poster",
        "role": "Poster & Flyer Design",
        "credits": "Semyon Shvetsov · Factory 3"
      },
      {
        "id": "posters-flyers-sl1",
        "kind": "image",
        "src": "media/full/VUZgDhPOCzteegtluBxIqaN7hg.webp",
        "alt": "Posters & Flyers — slide 1",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl2",
        "kind": "image",
        "src": "media/full/StAg5sufhBSJL8MYaqPBIgPMUEg.webp",
        "alt": "Posters & Flyers — slide 2",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl3",
        "kind": "image",
        "src": "media/full/3dEvn93cBSaz4Rao7Fzwms2S6jg.webp",
        "alt": "Posters & Flyers — slide 3",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl4",
        "kind": "image",
        "src": "media/full/dc6mruojODN3Z5ApFhvrlJkWI.webp",
        "alt": "Posters & Flyers — slide 4",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl5",
        "kind": "image",
        "src": "media/full/DoWNpWbgprabT1NnxkeiCwJWK0.webp",
        "alt": "Posters & Flyers — slide 5",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl6",
        "kind": "image",
        "src": "media/full/vbSsH9NqaKgaDTaYxRlcIPtvmgU.webp",
        "alt": "Posters & Flyers — slide 6",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl7",
        "kind": "image",
        "src": "media/full/BlwG8dvZp1SvBdxUGQ4OxbCzzhA.webp",
        "alt": "Posters & Flyers — slide 7",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-17",
    "roman": "XVII",
    "slug": "music-covers",
    "client": "Music Covers",
    "year": "2024",
    "category": "Art Direction",
    "description": "Some music cover works, that I made for the last few years",
    "slots": [
      {
        "id": "music-covers-s1",
        "kind": "image",
        "src": "media/thumb/BG4EEBCGrPZMqfIyXtWjYIpMM.webp",
        "fullSrc": "media/full/BG4EEBCGrPZMqfIyXtWjYIpMM.webp",
        "alt": "Music Covers — visual 1",
        "position": 1
      },
      {
        "id": "music-covers-s2",
        "kind": "image",
        "src": "media/thumb/J06APDgdjnwu4KDZsCnSOjQrm0.webp",
        "fullSrc": "media/full/J06APDgdjnwu4KDZsCnSOjQrm0.webp",
        "alt": "Music Covers — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "music-covers-sl1",
        "kind": "image",
        "src": "media/full/BG4EEBCGrPZMqfIyXtWjYIpMM.webp",
        "alt": "Music Covers — slide 1",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl2",
        "kind": "image",
        "src": "media/full/J06APDgdjnwu4KDZsCnSOjQrm0.webp",
        "alt": "Music Covers — slide 2",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl3",
        "kind": "image",
        "src": "media/full/pgHrSKPhzmLF5HeaEemCBAt4m0.webp",
        "alt": "Music Covers — slide 3",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl4",
        "kind": "image",
        "src": "media/full/gnjnjJb8Av6SO8JKZZ0j3KZVsqw.webp",
        "alt": "Music Covers — slide 4",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl5",
        "kind": "image",
        "src": "media/full/gP3l3ZOl76JWb40ZLdV7wPpzc.webp",
        "alt": "Music Covers — slide 5",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-18",
    "roman": "XVIII",
    "slug": "plgthg-na-svalke",
    "client": "plgthg — na svalke",
    "year": "2024",
    "category": "Graphics",
    "description": "",
    "slots": [
      {
        "id": "plgthg-na-svalke-s1",
        "kind": "image",
        "src": "media/thumb/oVlEMwk8Iwo9lafi0y31BqW6MSU.webp",
        "fullSrc": "media/full/oVlEMwk8Iwo9lafi0y31BqW6MSU.webp",
        "alt": "plgthg — na svalke — visual 1",
        "position": 1
      },
      {
        "id": "plgthg-na-svalke-s2",
        "kind": "image",
        "src": "media/thumb/EpNrAApimTMOk31vDF57ThCKCo.webp",
        "fullSrc": "media/full/EpNrAApimTMOk31vDF57ThCKCo.webp",
        "alt": "plgthg — na svalke — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "plgthg-na-svalke-sl1",
        "kind": "image",
        "src": "media/full/oVlEMwk8Iwo9lafi0y31BqW6MSU.webp",
        "alt": "plgthg — na svalke — slide 1",
        "role": "Visual Direction & Graphics",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "plgthg-na-svalke-sl2",
        "kind": "image",
        "src": "media/full/EpNrAApimTMOk31vDF57ThCKCo.webp",
        "alt": "plgthg — na svalke — slide 2",
        "role": "Visual Direction & Graphics",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "plgthg-na-svalke-sl3",
        "kind": "image",
        "src": "media/full/s0Y6CDWGGGo9mvILyfn1LoAVuo.webp",
        "alt": "plgthg — na svalke — slide 3",
        "role": "Visual Direction & Graphics",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-19",
    "roman": "XIX",
    "slug": "metasystem-promo",
    "client": "Metasystem Promo",
    "year": "2024",
    "category": "Motion & Graphics",
    "description": "",
    "slots": [
      {
        "id": "metasystem-promo-s1",
        "kind": "image",
        "src": "media/thumb/leofF9Ub48T1y1XUjiRmNCarMBw.webp",
        "fullSrc": "media/full/leofF9Ub48T1y1XUjiRmNCarMBw.webp",
        "alt": "Metasystem Promo — visual 1",
        "position": 1
      }
    ],
    "slides": [
      {
        "id": "metasystem-promo-sl1",
        "kind": "image",
        "src": "media/full/leofF9Ub48T1y1XUjiRmNCarMBw.webp",
        "alt": "Metasystem Promo — slide 1",
        "role": "Promo Visuals & Typeface Design",
        "credits": "Semyon Shvetsov"
      }
    ]
  }
];

export const PROJECTS: Project[] = RAW_PROJECTS.map((project) => ({
  ...project,
  slots: project.slots.map((slot) => ({
    ...slot,
    src: resolveUrl(slot.src),
    fullSrc: slot.fullSrc ? resolveUrl(slot.fullSrc) : undefined,
    poster: slot.poster ? resolveUrl(slot.poster) : undefined,
  })),
  slides: project.slides.map((slide) => ({
    ...slide,
    src: resolveUrl(slide.src),
    poster: slide.poster ? resolveUrl(slide.poster) : undefined,
  })),
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
