export type MediaKind = 'image' | 'video';

export interface ProjectSlot {
  id: string;
  kind: MediaKind;
  src: string;
  fullSrc?: string;
  alt: string;
  orientation?: 'vertical' | 'horizontal';
  /** Slot position in the 900px desktop cluster: 1=top-left, 2=bottom-left, 3=top-right, 4=bottom-right */
  position: 1 | 2 | 3 | 4;
}

export interface ProjectSlide {
  id: string;
  kind: MediaKind;
  src: string;
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

export const PROJECTS: Project[] = [
  {
    "id": "client-1",
    "roman": "I",
    "slug": "kintsugi-jewelry",
    "client": "Kintsugi Jewelry",
    "year": "2024",
    "category": "Brand Platform & Art Direction",
    "description": "Branding and Visual Identity for a Portuguese based brand\n\nKintsugi Jewelry is a Russian-Portuguese jewelry brand actively gaining momentum among independent and avant-garde jewelry designers. From its very beginning, the brand has confidently won the love and trust of consumers, being famous for its unique approach to jewelry creation.\n\nKintsugi is the Japanese art of restoring ceramic pieces using a lacquer derived from the sap of the lacquer tree mixed with gold, silver or platinum powder. The jewelry uses an identical technique that no other jeweler around the world uses. In addition, it is common to use “salt and pepper” stones in the jewelry, which include dust particles that create a unique filling within the stone that is one-of-a-kind. Each piece of Kintsugi Jewelry is handmade and unique, as there is no identical piece due to the technology used.",
    "slots": [
      {
        "id": "kintsugi-jewelry-s1",
        "kind": "video",
        "src": "https://framerusercontent.com/assets/rMWSRXLRvjh5FSRBAEd1rezfbDE.mp4",
        "fullSrc": "https://framerusercontent.com/images/V1TS935v2yI2tXch4Axefm6Sc.png",
        "alt": "Kintsugi Jewelry — visual 1",
        "position": 1
      },
      {
        "id": "kintsugi-jewelry-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/V1TS935v2yI2tXch4Axefm6Sc.png",
        "fullSrc": "https://framerusercontent.com/images/V1TS935v2yI2tXch4Axefm6Sc.png",
        "alt": "Kintsugi Jewelry — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "kintsugi-jewelry-sl1",
        "kind": "video",
        "src": "https://framerusercontent.com/assets/rMWSRXLRvjh5FSRBAEd1rezfbDE.mp4",
        "alt": "Kintsugi Jewelry — slide 1",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/V1TS935v2yI2tXch4Axefm6Sc.png",
        "alt": "Kintsugi Jewelry — slide 2",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1v1LjK59Yc25kqk67g2ZAbUmao.png",
        "alt": "Kintsugi Jewelry — slide 3",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/lv3F7PYT1uEU9kLIHxPUj4yqo.png",
        "alt": "Kintsugi Jewelry — slide 4",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/715GbvvlEUFjqKc7x6A3dW9yidw.jpg",
        "alt": "Kintsugi Jewelry — slide 5",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/AK8xdTs3Xz9f7OinK7z7o5sQl2I.gif",
        "alt": "Kintsugi Jewelry — slide 6",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/27mg5HrvVr4HT6KibdnTe1MWI.png",
        "alt": "Kintsugi Jewelry — slide 7",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl8",
        "kind": "image",
        "src": "https://framerusercontent.com/images/aPTst4bY9OR2YDN29IHbe8Ds0E.png",
        "alt": "Kintsugi Jewelry — slide 8",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl9",
        "kind": "image",
        "src": "https://framerusercontent.com/images/E9w4SO5Fm5kVTgedJq4Ikr1qA.png",
        "alt": "Kintsugi Jewelry — slide 9",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl10",
        "kind": "image",
        "src": "https://framerusercontent.com/images/8013weofebp31keHtcwunT7DU.png",
        "alt": "Kintsugi Jewelry — slide 10",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl11",
        "kind": "image",
        "src": "https://framerusercontent.com/images/B1xZchfsZ4mP0bEBtjRDedrD5I.png",
        "alt": "Kintsugi Jewelry — slide 11",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl12",
        "kind": "image",
        "src": "https://framerusercontent.com/images/glB9t0heK4SszLtUyvjvmWNRmwI.png",
        "alt": "Kintsugi Jewelry — slide 12",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      },
      {
        "id": "kintsugi-jewelry-sl13",
        "kind": "image",
        "src": "https://framerusercontent.com/images/RdUQgStpdPeylyyfDKP4Famwg5Y.png",
        "alt": "Kintsugi Jewelry — slide 13",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Art Direction & Design: Semyon Shvetsov · Lisbon, Portugal"
      }
    ]
  },
  {
    "id": "client-2",
    "roman": "II",
    "slug": "9mice",
    "client": "9mice Afterparty",
    "year": "2024",
    "category": "Art Direction & Key Visual",
    "description": "9mice (born Sergey Igorevich Dmitriev on August 27, 2000) is a Russian experimental hip-hop artist, producer, and creative director. Together with fellow musician Kai Angel, he forms the influential creative duo and aesthetic movement VIPERR , which reshaped the Russian-speaking underground and alternative rap scene in the mid-2020s.",
    "slots": [
      {
        "id": "9mice-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/gkDwCbagAyyuiYKPZow2Io8D5Q.jpg",
        "fullSrc": "https://framerusercontent.com/images/gkDwCbagAyyuiYKPZow2Io8D5Q.jpg",
        "alt": "9mice Afterparty — visual 1",
        "position": 1
      },
      {
        "id": "9mice-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/3IDnaDhZE6D7WGOqRoB0uRoNSoU.jpg",
        "fullSrc": "https://framerusercontent.com/images/3IDnaDhZE6D7WGOqRoB0uRoNSoU.jpg",
        "alt": "9mice Afterparty — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "9mice-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/gkDwCbagAyyuiYKPZow2Io8D5Q.jpg",
        "alt": "9mice Afterparty — slide 1",
        "role": "Key Visuals & Poster Design",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "9mice-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/3IDnaDhZE6D7WGOqRoB0uRoNSoU.jpg",
        "alt": "9mice Afterparty — slide 2",
        "role": "Key Visuals & Poster Design",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "9mice-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1ozrI3Faqm8113RFdpQUcLZQI.jpg",
        "alt": "9mice Afterparty — slide 3",
        "role": "Key Visuals & Poster Design",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-3",
    "roman": "III",
    "slug": "demix-x-aytlo",
    "client": "Demix × Outlaw",
    "year": "2025",
    "category": "Visual Communication",
    "description": "A creation of visual communication materials for a new collaboration between DEMIX and OUTLAW",
    "slots": [
      {
        "id": "demix-x-aytlo-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/PLK27lk25nedMzuFopexRzf2bNE.png",
        "fullSrc": "https://framerusercontent.com/images/PLK27lk25nedMzuFopexRzf2bNE.png",
        "alt": "Demix × Outlaw — visual 1",
        "position": 1
      },
      {
        "id": "demix-x-aytlo-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/45WC9r0hm766ow49omjBlquIQ.jpg",
        "fullSrc": "https://framerusercontent.com/images/45WC9r0hm766ow49omjBlquIQ.jpg",
        "alt": "Demix × Outlaw — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "demix-x-aytlo-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/PLK27lk25nedMzuFopexRzf2bNE.png",
        "alt": "Demix × Outlaw — slide 1",
        "role": "Visual Communication & Key Visuals",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "demix-x-aytlo-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/45WC9r0hm766ow49omjBlquIQ.jpg",
        "alt": "Demix × Outlaw — slide 2",
        "role": "Visual Communication & Key Visuals",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "demix-x-aytlo-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/WzGKVYV0Bls6nOeUc51TgNZGrqM.png",
        "alt": "Demix × Outlaw — slide 3",
        "role": "Visual Communication & Key Visuals",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-4",
    "roman": "IV",
    "slug": "void",
    "client": "VOID",
    "year": "2024",
    "category": "Brand Identity & Art Direction",
    "description": "VOID — музыкальный фестиваль в Москве, где происходит «столкновение» жанров, акций и перфомансов. Основываясь на идее аннулирования жанровости, была разработана бренд айдентика фестиваля, стремящаяся объединить все в единый уникальный опыт.",
    "slots": [
      {
        "id": "void-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/SRxK8L7M7FoScWNF8xXROykZc.png",
        "fullSrc": "https://framerusercontent.com/images/SRxK8L7M7FoScWNF8xXROykZc.png",
        "alt": "VOID — visual 1",
        "position": 1
      },
      {
        "id": "void-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/w2StFmS9WLrVrUMOlJXmpsjguE.png",
        "fullSrc": "https://framerusercontent.com/images/w2StFmS9WLrVrUMOlJXmpsjguE.png",
        "alt": "VOID — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "void-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/SRxK8L7M7FoScWNF8xXROykZc.png",
        "alt": "VOID — slide 1",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/w2StFmS9WLrVrUMOlJXmpsjguE.png",
        "alt": "VOID — slide 2",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/tuTAjKuddCY7xgM63oGAPrHWsbk.png",
        "alt": "VOID — slide 3",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/tQWp8diYbH664U0ZZ5uSe52NY.png",
        "alt": "VOID — slide 4",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mdKULDkzFvkiqIzln1BHtoNHhh4.png",
        "alt": "VOID — slide 5",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/M6eILbTXt0xutkH96yxR3InjH3w.png",
        "alt": "VOID — slide 6",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/ddCSe0TA0UvuDBhJCkN4zswuxo.png",
        "alt": "VOID — slide 7",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl8",
        "kind": "image",
        "src": "https://framerusercontent.com/images/5r5sPkywhxb7Sco5RoOlbcUgU.png",
        "alt": "VOID — slide 8",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl9",
        "kind": "image",
        "src": "https://framerusercontent.com/images/VsNT5tMxkQR79iJdSXSU9dz9tsQ.png",
        "alt": "VOID — slide 9",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl10",
        "kind": "image",
        "src": "https://framerusercontent.com/images/WNnYtQAoRFpfXjHSDqVsHZ2Aqc.png",
        "alt": "VOID — slide 10",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl11",
        "kind": "image",
        "src": "https://framerusercontent.com/images/OQdVim2tJ7udwc5zqlb9sCXs6c.png",
        "alt": "VOID — slide 11",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      },
      {
        "id": "void-sl12",
        "kind": "image",
        "src": "https://framerusercontent.com/images/sELOJXA3mMuknZ6ahsXIs9awag.png",
        "alt": "VOID — slide 12",
        "role": "Brand Platform, Visual Identity & Production",
        "credits": "Music Festival · Moscow"
      }
    ]
  },
  {
    "id": "client-5",
    "roman": "V",
    "slug": "aperol",
    "client": "Aperol",
    "year": "2024",
    "category": "Brand Activation",
    "description": "В рамках PR-активаций для бренда Aperol было разработано большое количество визуальных материалов, объектов и дизайн окружения",
    "slots": [
      {
        "id": "aperol-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/fri1n27wQOuJB7NDw5rIiA9dIE.png",
        "fullSrc": "https://framerusercontent.com/images/fri1n27wQOuJB7NDw5rIiA9dIE.png",
        "alt": "Aperol — visual 1",
        "position": 1
      },
      {
        "id": "aperol-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/ffBoaFBGUgESplWykvwdUYdIoW4.png",
        "fullSrc": "https://framerusercontent.com/images/ffBoaFBGUgESplWykvwdUYdIoW4.png",
        "alt": "Aperol — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "aperol-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/fri1n27wQOuJB7NDw5rIiA9dIE.png",
        "alt": "Aperol — slide 1",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/ffBoaFBGUgESplWykvwdUYdIoW4.png",
        "alt": "Aperol — slide 2",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/A291h6Lrq6FsYpSiKGFnJguvSg.png",
        "alt": "Aperol — slide 3",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/2CJ1G7ktXw8LjwCIIDvBmFsNvI.png",
        "alt": "Aperol — slide 4",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/OCwwUoSsTyZSu8qYvJUbh6zJZE.png",
        "alt": "Aperol — slide 5",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/cqDaSwdmczzTwr0iDHBfjmYBWWQ.png",
        "alt": "Aperol — slide 6",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      },
      {
        "id": "aperol-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/l2DqnaR4YQ2eHneGqBEPnnnRIk.png",
        "alt": "Aperol — slide 7",
        "role": "Brand Activation & Environmental Design",
        "credits": "PR Activations & Objects"
      }
    ]
  },
  {
    "id": "client-6",
    "roman": "VI",
    "slug": "natura-siberica",
    "client": "Natura Siberica",
    "year": "2024",
    "category": "Packaging Design",
    "description": "Implemented and unrealized projects created as part of the work on packaging in the Natura Siberica brand. In addition to developing concepts and visualizations, much attention was paid to prepress preparation, technical studies and high-quality implementation",
    "slots": [
      {
        "id": "natura-siberica-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/SYwWdd0cmA51yDRsZjbhnLSsZs.png",
        "fullSrc": "https://framerusercontent.com/images/SYwWdd0cmA51yDRsZjbhnLSsZs.png",
        "alt": "Natura Siberica — visual 1",
        "position": 1
      },
      {
        "id": "natura-siberica-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/POhVhCz9dI9JfnCCCtGcaxx8U.png",
        "fullSrc": "https://framerusercontent.com/images/POhVhCz9dI9JfnCCCtGcaxx8U.png",
        "alt": "Natura Siberica — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "natura-siberica-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/SYwWdd0cmA51yDRsZjbhnLSsZs.png",
        "alt": "Natura Siberica — slide 1",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/POhVhCz9dI9JfnCCCtGcaxx8U.png",
        "alt": "Natura Siberica — slide 2",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/yrD1rG6XRyo6xVKyhBZmbMVTCwo.png",
        "alt": "Natura Siberica — slide 3",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/aMydGSb6D324jTefSLaAXB1nA.png",
        "alt": "Natura Siberica — slide 4",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/0eHgoaBK9IBeo5WLMNGnkzhJfY.png",
        "alt": "Natura Siberica — slide 5",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/p2TGOqDa7NYN77EyvaRUA7CeXs.png",
        "alt": "Natura Siberica — slide 6",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/yQD9Su6pXA04PsBLy5DjGhyYCc.png",
        "alt": "Natura Siberica — slide 7",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl8",
        "kind": "image",
        "src": "https://framerusercontent.com/images/yAVb2QZ0GD6U5SoMXvyLZLd49g.png",
        "alt": "Natura Siberica — slide 8",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl9",
        "kind": "image",
        "src": "https://framerusercontent.com/images/6tVtjWLxfFeDSevjoVS2Yy6YfKU.png",
        "alt": "Natura Siberica — slide 9",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl10",
        "kind": "image",
        "src": "https://framerusercontent.com/images/2cTEMneK93dWWPLzidzPapNo.png",
        "alt": "Natura Siberica — slide 10",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl11",
        "kind": "image",
        "src": "https://framerusercontent.com/images/t1ROS4OXZzNiKxKhAjWeQtbGgM.png",
        "alt": "Natura Siberica — slide 11",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      },
      {
        "id": "natura-siberica-sl12",
        "kind": "image",
        "src": "https://framerusercontent.com/images/tkmNjnIJe6KUQhWOSP4R6DOGrkw.png",
        "alt": "Natura Siberica — slide 12",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Art Direction: Elena Beschastnaya, Maya Mihaleva"
      }
    ]
  },
  {
    "id": "client-7",
    "roman": "VII",
    "slug": "music-typography-research-book",
    "client": "Music Typography",
    "year": "2024",
    "category": "Editorial Design",
    "description": "Typography is one of the key elements of visual communication, determining not only readability, but also the nature, emotional tone and identity of this communication. The visual research is devoted to the consideration of the typography of music posters and posters as the main element in the formation of visual identity.",
    "slots": [
      {
        "id": "music-typography-research-book-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/iW6HK8ofJ0QCCXCNaWYvbIHthU.png",
        "fullSrc": "https://framerusercontent.com/images/iW6HK8ofJ0QCCXCNaWYvbIHthU.png",
        "alt": "Music Typography — visual 1",
        "position": 1
      },
      {
        "id": "music-typography-research-book-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mPVfqBQOx72Wn9MoSlz685ze81w.png",
        "fullSrc": "https://framerusercontent.com/images/mPVfqBQOx72Wn9MoSlz685ze81w.png",
        "alt": "Music Typography — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "music-typography-research-book-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/iW6HK8ofJ0QCCXCNaWYvbIHthU.png",
        "alt": "Music Typography — slide 1",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mPVfqBQOx72Wn9MoSlz685ze81w.png",
        "alt": "Music Typography — slide 2",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/W8mbxtLcbdTK1VN5NoK9lxhovlI.png",
        "alt": "Music Typography — slide 3",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/fpObAakgSaQvWC9TSm0fZDoDE.png",
        "alt": "Music Typography — slide 4",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/RS40LOxFkmJu9recmmIpxlLf5Y.png",
        "alt": "Music Typography — slide 5",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/HTroYnE19cRJyqr72lbcUex7g.png",
        "alt": "Music Typography — slide 6",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/TKy1qeIIOll3uTFgX8Bvu1yos.png",
        "alt": "Music Typography — slide 7",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl8",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Jq3YRaVNzPTIipSjTjd32fLHDoE.png",
        "alt": "Music Typography — slide 8",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl9",
        "kind": "image",
        "src": "https://framerusercontent.com/images/uzS6oG6g34MJ2v7XtXPj0fMkR4.png",
        "alt": "Music Typography — slide 9",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl10",
        "kind": "image",
        "src": "https://framerusercontent.com/images/GXJc0FLdZTR0R9nwoynGcdJoHFw.png",
        "alt": "Music Typography — slide 10",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl11",
        "kind": "image",
        "src": "https://framerusercontent.com/images/MmErtRY6v5E040qgDdMTmZYjOug.png",
        "alt": "Music Typography — slide 11",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "music-typography-research-book-sl12",
        "kind": "image",
        "src": "https://framerusercontent.com/images/akiPXF1emPBvrUD8GCswP3AFnI.png",
        "alt": "Music Typography — slide 12",
        "role": "Typography & Editorial Research Book",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-8",
    "roman": "VIII",
    "slug": "glofi",
    "client": "Glofi",
    "year": "2024",
    "category": "Visual Identity",
    "description": "Glofi is an artificial intelligence—based platform that helps brands, agencies, and startups create ideas and complete the process.\n\nThe metaphor of the \"space of ideas\" became the main one for the style, which is expressed and executed using the image of a ray of light, thereby fully supporting the idea and goals of the brand.",
    "slots": [
      {
        "id": "glofi-s1",
        "kind": "video",
        "src": "https://framerusercontent.com/assets/lBuM5Ah1pGI4GB7uBDvGVjig2zM.mp4",
        "fullSrc": "https://framerusercontent.com/images/6V4gWyR0X2IP4mwfHQCvIDNJaao.png",
        "alt": "Glofi — visual 1",
        "position": 1
      },
      {
        "id": "glofi-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/6V4gWyR0X2IP4mwfHQCvIDNJaao.png",
        "fullSrc": "https://framerusercontent.com/images/6V4gWyR0X2IP4mwfHQCvIDNJaao.png",
        "alt": "Glofi — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "glofi-sl1",
        "kind": "video",
        "src": "https://framerusercontent.com/assets/lBuM5Ah1pGI4GB7uBDvGVjig2zM.mp4",
        "alt": "Glofi — slide 1",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/6V4gWyR0X2IP4mwfHQCvIDNJaao.png",
        "alt": "Glofi — slide 2",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/PKfVggObweFPjEuvx21aUr4IDU.png",
        "alt": "Glofi — slide 3",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/YBcjJL3a6cUQRveZbyFUkosMFKE.png",
        "alt": "Glofi — slide 4",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Oj3qT9sopUsaHEQyLeTL35s2dQ.png",
        "alt": "Glofi — slide 5",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/2YITc3SpewT0dL5LFW1T1ZIXeB8.png",
        "alt": "Glofi — slide 6",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mLUEOY043XeZrKsWxBimPUlqlU.png",
        "alt": "Glofi — slide 7",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl8",
        "kind": "image",
        "src": "https://framerusercontent.com/images/scn96dlJsCxGHnVD2neErxR7Mg.png",
        "alt": "Glofi — slide 8",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl9",
        "kind": "image",
        "src": "https://framerusercontent.com/images/OnvqLQuK3a3PK4SVWQa48hnTYk.png",
        "alt": "Glofi — slide 9",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl10",
        "kind": "image",
        "src": "https://framerusercontent.com/images/VkI5DV1z2waEqbdhIk3SWVcg8h8.png",
        "alt": "Glofi — slide 10",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl11",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Eg1J80dufJMXZKiJmlZety2GFs.png",
        "alt": "Glofi — slide 11",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl12",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Xhe5Qvbu524GJMzWkPsyaohYlT0.jpg",
        "alt": "Glofi — slide 12",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "glofi-sl13",
        "kind": "image",
        "src": "https://framerusercontent.com/images/EFaqVEkn1ng9aaZF1CIZ1L1rpBg.jpg",
        "alt": "Glofi — slide 13",
        "role": "Brand Identity for AI Platform",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-9",
    "roman": "IX",
    "slug": "4",
    "client": "4 (MV)",
    "year": "2025",
    "category": "Music Video",
    "description": "Brainrot and nostalgia influenced music video for a single «4» from an upcoming Benjamingotbenz's album «gits4: Flower of Life». Mixed media workflow + some AI\n\nShot: @unknwn.user296765771 + @benjamingotbenz + @ufoinmyroom AI: @benjamingotbenz + @lovdeluxe_ + @qquataree Edit: @lovdeluxe_ Produced: @unknwn.user296765771 Camera & Light Assistant: @fffyyooo Color Correction: @maveroff4 Dir: @benjamingotbenz",
    "slots": [
      {
        "id": "4-s1",
        "kind": "video",
        "src": "https://framerusercontent.com/assets/neafI9Wo3YwQfwliIm7SNgdasU.mp4",
        "fullSrc": "https://framerusercontent.com/images/kFime9bbPngJX9rKBb84EtEIM.png",
        "alt": "4 (MV) — visual 1",
        "position": 1
      },
      {
        "id": "4-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/kFime9bbPngJX9rKBb84EtEIM.png",
        "fullSrc": "https://framerusercontent.com/images/kFime9bbPngJX9rKBb84EtEIM.png",
        "alt": "4 (MV) — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "4-sl1",
        "kind": "video",
        "src": "https://framerusercontent.com/assets/neafI9Wo3YwQfwliIm7SNgdasU.mp4",
        "alt": "4 (MV) — slide 1",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/kFime9bbPngJX9rKBb84EtEIM.png",
        "alt": "4 (MV) — slide 2",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/jGp1GUMrn4W3B4rZwM2nFyKa4tk.png",
        "alt": "4 (MV) — slide 3",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/qkHv8Y5pxZvvPlrFeoC3SYclYWE.png",
        "alt": "4 (MV) — slide 4",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/omYmtGdsSRt2LtFZQRJruljWk.png",
        "alt": "4 (MV) — slide 5",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mYUQ4LtregXOeEhzRreNpxCDBVc.png",
        "alt": "4 (MV) — slide 6",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/NmShHLUgfJcLFNE4RssGmKLx0k.png",
        "alt": "4 (MV) — slide 7",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl8",
        "kind": "image",
        "src": "https://framerusercontent.com/images/w2UtMnQy8C7icp12v0L3PTfVY.png",
        "alt": "4 (MV) — slide 8",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl9",
        "kind": "image",
        "src": "https://framerusercontent.com/images/SYCCMH8DYHnZBBJQMhHQRq0xCbA.png",
        "alt": "4 (MV) — slide 9",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl10",
        "kind": "image",
        "src": "https://framerusercontent.com/images/myJPDgHibHIfRBdj79zrhdWKQ4.jpg",
        "alt": "4 (MV) — slide 10",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl11",
        "kind": "image",
        "src": "https://framerusercontent.com/images/YcCfpaQDWSqLPasz9tYUmrRYEk.jpg",
        "alt": "4 (MV) — slide 11",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl12",
        "kind": "image",
        "src": "https://framerusercontent.com/images/yyMLhe7YNmNCrrCFPVRgEKdOflk.jpg",
        "alt": "4 (MV) — slide 12",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      },
      {
        "id": "4-sl13",
        "kind": "image",
        "src": "https://framerusercontent.com/images/oR3XsTM6L7o7ZBxANFvSpgrrHE.jpg",
        "alt": "4 (MV) — slide 13",
        "role": "Mixed Media, AI & Video Editing",
        "credits": "BenjaminGotBenz, Хестон · Edit & AI: @lovdeluxe_"
      }
    ]
  },
  {
    "id": "client-10",
    "roman": "X",
    "slug": "zavernite",
    "client": "Zavernite",
    "year": "2024",
    "category": "Rebranding",
    "description": "The rebranding of the street food café chain “Zavernite!”. As part of the project, the brand platform was updated and the visual identity of the street food café chain was redesigned. The team conducted an analysis of the market and the consumption context, clarified the target audience, their behavioral patterns and expectations, and also identified the current territory for the brand’s positioning.\n\nIn the previous version, the brand had a system in place, but some of the meanings required additional interpretation. The name “Zavernite!” It wasn’t always perceived as a direct trigger for action, which reduced the effectiveness of communication at the contact points.",
    "slots": [
      {
        "id": "zavernite-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1Vkmg9ur3ieqaKscM0RwtwBtiM.jpg",
        "fullSrc": "https://framerusercontent.com/images/1Vkmg9ur3ieqaKscM0RwtwBtiM.jpg",
        "alt": "Zavernite — visual 1",
        "position": 1
      },
      {
        "id": "zavernite-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/vCs8pgMpdYD5j4hOwCKJpmWpWY.jpg",
        "fullSrc": "https://framerusercontent.com/images/vCs8pgMpdYD5j4hOwCKJpmWpWY.jpg",
        "alt": "Zavernite — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "zavernite-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1Vkmg9ur3ieqaKscM0RwtwBtiM.jpg",
        "alt": "Zavernite — slide 1",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/vCs8pgMpdYD5j4hOwCKJpmWpWY.jpg",
        "alt": "Zavernite — slide 2",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1NVD1IcspKgqbEgPTBsy3e0nLb0.jpg",
        "alt": "Zavernite — slide 3",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1QVIotrAqAhKsCAMQz4DwVrNk1Y.jpg",
        "alt": "Zavernite — slide 4",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Akw87Xq4D7kgQ5lxO29Z7WUA8.jpg",
        "alt": "Zavernite — slide 5",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/vJbNhJi3VqUentpgTkOCj1JCPzk.jpg",
        "alt": "Zavernite — slide 6",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/LNCRNrQkHsHPRyQwYpX30CCb9U.jpg",
        "alt": "Zavernite — slide 7",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl8",
        "kind": "image",
        "src": "https://framerusercontent.com/images/A7NlnnPN6eaGdQI7XKEXKxPq5c.jpg",
        "alt": "Zavernite — slide 8",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl9",
        "kind": "image",
        "src": "https://framerusercontent.com/images/eFQhqsv0orS4GPlfZsyHM5fAlA.jpg",
        "alt": "Zavernite — slide 9",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl10",
        "kind": "image",
        "src": "https://framerusercontent.com/images/9u9K67Q0nYZgrZOIDci0Kaw1vg0.jpg",
        "alt": "Zavernite — slide 10",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl11",
        "kind": "image",
        "src": "https://framerusercontent.com/images/48qGmEVbfoLW2ijteyI8Bj4V8Sk.jpg",
        "alt": "Zavernite — slide 11",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      },
      {
        "id": "zavernite-sl12",
        "kind": "image",
        "src": "https://framerusercontent.com/images/dOwrTiSO1G81dFScyfibbum3hzc.jpg",
        "alt": "Zavernite — slide 12",
        "role": "Brand Platform & Visual Identity",
        "credits": "Street Food Café Chain Rebranding"
      }
    ]
  },
  {
    "id": "client-11",
    "roman": "XI",
    "slug": "modular",
    "client": "Modular",
    "year": "2024",
    "category": "Typeface Design",
    "description": "ModularFontisafontinspiredbythecomplexworldofmodulartools.Thefontwasdevelopedusingoneofthebasicprinciplesofmodularsynthesizers:patching.Fontwillbemadepubliclyavailableafterthefinishingtouchesarecompleted:)",
    "slots": [
      {
        "id": "modular-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/N1OHA0IIuPbhqQaIxnKKvt35dY.png",
        "fullSrc": "https://framerusercontent.com/images/N1OHA0IIuPbhqQaIxnKKvt35dY.png",
        "alt": "Modular — visual 1",
        "position": 1
      },
      {
        "id": "modular-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/QvwuGfauW6TkwaWQELPVbaQgL4.jpg",
        "fullSrc": "https://framerusercontent.com/images/QvwuGfauW6TkwaWQELPVbaQgL4.jpg",
        "alt": "Modular — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "modular-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/N1OHA0IIuPbhqQaIxnKKvt35dY.png",
        "alt": "Modular — slide 1",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/QvwuGfauW6TkwaWQELPVbaQgL4.jpg",
        "alt": "Modular — slide 2",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/XthAdjM0UCrQBG00OwoEHH7ro8.jpg",
        "alt": "Modular — slide 3",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/X37yBIGGIAc5aLvndNozvVJ5k.jpg",
        "alt": "Modular — slide 4",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/l6ZgWR6hNE1NMoepQfto91lABXU.jpg",
        "alt": "Modular — slide 5",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/AgR1ntoLG8ija5r8AyZalhS1ZcE.jpg",
        "alt": "Modular — slide 6",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "modular-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/NukXDSWSEtGPcNhDW5w0rMah4.jpg",
        "alt": "Modular — slide 7",
        "role": "Modular Typeface & Lettering",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-12",
    "roman": "XII",
    "slug": "nn-creative",
    "client": "NN Creative",
    "year": "2024",
    "category": "Visual Identity",
    "description": "VisualIdentityforNizhnyNovgorodCreativeIndustriesCompetition\n\nCreativeIndustriesoftheNizhnyNovgorodRegionisaregionalplatformforcreatinginstitutionalconditionsforthedevelopmentofcreativeindustriesintraditionalareasoftheNizhnyNovgorodregion.",
    "slots": [
      {
        "id": "nn-creative-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.jpg",
        "fullSrc": "https://framerusercontent.com/images/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.jpg",
        "alt": "NN Creative — visual 1",
        "position": 1
      },
      {
        "id": "nn-creative-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/NOWdh92mM9cqzf2YfamqFFSzYjw.jpg",
        "fullSrc": "https://framerusercontent.com/images/NOWdh92mM9cqzf2YfamqFFSzYjw.jpg",
        "alt": "NN Creative — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "nn-creative-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/TDJ6r8hW2wRRBXRmeh1TSMlwU5Q.jpg",
        "alt": "NN Creative — slide 1",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/NOWdh92mM9cqzf2YfamqFFSzYjw.jpg",
        "alt": "NN Creative — slide 2",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/dAQmXwASffCASmiL87gB1328Jco.jpg",
        "alt": "NN Creative — slide 3",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/myf0YlJiyb80baqWa46yu57BRSw.jpg",
        "alt": "NN Creative — slide 4",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/FrKJdyLRRvy2aEhiwSKSu77EPDI.jpg",
        "alt": "NN Creative — slide 5",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      },
      {
        "id": "nn-creative-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/HQSoHJDyilqG7ctNsu0gZUge6Y.jpg",
        "alt": "NN Creative — slide 6",
        "role": "Visual Identity for Creative Industries Competition",
        "credits": "Design: Semyon Shvetsov · Curator: Max Kuzhegetov"
      }
    ]
  },
  {
    "id": "client-13",
    "roman": "XIII",
    "slug": "bariers",
    "client": "Bariers",
    "year": "2024",
    "category": "AI Visual Direction",
    "description": "",
    "slots": [
      {
        "id": "bariers-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/lPNEL5VGb5VmN0GaForZkh2TxnA.webp",
        "fullSrc": "https://framerusercontent.com/images/lPNEL5VGb5VmN0GaForZkh2TxnA.webp",
        "alt": "Bariers — visual 1",
        "position": 1
      },
      {
        "id": "bariers-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/rOaBVqpAhWDvUbCTUblKLrHHf8.jpg",
        "fullSrc": "https://framerusercontent.com/images/rOaBVqpAhWDvUbCTUblKLrHHf8.jpg",
        "alt": "Bariers — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "bariers-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/lPNEL5VGb5VmN0GaForZkh2TxnA.webp",
        "alt": "Bariers — slide 1",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/rOaBVqpAhWDvUbCTUblKLrHHf8.jpg",
        "alt": "Bariers — slide 2",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/D887oOYNyalnws0ydAVumVVJlk.jpg",
        "alt": "Bariers — slide 3",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/dpAs0coSna6HWJ8xKb9bAL22M.jpg",
        "alt": "Bariers — slide 4",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "bariers-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/47UsvTDjYH1DdGQy5Hko0IQ7B0.jpg",
        "alt": "Bariers — slide 5",
        "role": "Self Project — AI-Generated Visual Study",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-14",
    "roman": "XIV",
    "slug": "posters-flyers",
    "client": "Posters & Flyers",
    "year": "2024",
    "category": "Graphic Design",
    "description": "",
    "slots": [
      {
        "id": "posters-flyers-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/VUZgDhPOCzteegtluBxIqaN7hg.png",
        "fullSrc": "https://framerusercontent.com/images/VUZgDhPOCzteegtluBxIqaN7hg.png",
        "alt": "Posters & Flyers — visual 1",
        "position": 1
      },
      {
        "id": "posters-flyers-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/StAg5sufhBSJL8MYaqPBIgPMUEg.png",
        "fullSrc": "https://framerusercontent.com/images/StAg5sufhBSJL8MYaqPBIgPMUEg.png",
        "alt": "Posters & Flyers — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "posters-flyers-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/VUZgDhPOCzteegtluBxIqaN7hg.png",
        "alt": "Posters & Flyers — slide 1",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/StAg5sufhBSJL8MYaqPBIgPMUEg.png",
        "alt": "Posters & Flyers — slide 2",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/3dEvn93cBSaz4Rao7Fzwms2S6jg.png",
        "alt": "Posters & Flyers — slide 3",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/dc6mruojODN3Z5ApFhvrlJkWI.png",
        "alt": "Posters & Flyers — slide 4",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/DoWNpWbgprabT1NnxkeiCwJWK0.png",
        "alt": "Posters & Flyers — slide 5",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/vbSsH9NqaKgaDTaYxRlcIPtvmgU.png",
        "alt": "Posters & Flyers — slide 6",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "posters-flyers-sl7",
        "kind": "image",
        "src": "https://framerusercontent.com/images/BlwG8dvZp1SvBdxUGQ4OxbCzzhA.png",
        "alt": "Posters & Flyers — slide 7",
        "role": "Posters & Music Event Flyers",
        "credits": "Selected Works · Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-15",
    "roman": "XV",
    "slug": "music-covers",
    "client": "Music Covers",
    "year": "2024",
    "category": "Art Direction",
    "description": "Some music cover works, that I made for the last few years",
    "slots": [
      {
        "id": "music-covers-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/BG4EEBCGrPZMqfIyXtWjYIpMM.png",
        "fullSrc": "https://framerusercontent.com/images/BG4EEBCGrPZMqfIyXtWjYIpMM.png",
        "alt": "Music Covers — visual 1",
        "position": 1
      },
      {
        "id": "music-covers-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/J06APDgdjnwu4KDZsCnSOjQrm0.png",
        "fullSrc": "https://framerusercontent.com/images/J06APDgdjnwu4KDZsCnSOjQrm0.png",
        "alt": "Music Covers — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "music-covers-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/BG4EEBCGrPZMqfIyXtWjYIpMM.png",
        "alt": "Music Covers — slide 1",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/J06APDgdjnwu4KDZsCnSOjQrm0.png",
        "alt": "Music Covers — slide 2",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/pgHrSKPhzmLF5HeaEemCBAt4m0.png",
        "alt": "Music Covers — slide 3",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/gnjnjJb8Av6SO8JKZZ0j3KZVsqw.png",
        "alt": "Music Covers — slide 4",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      },
      {
        "id": "music-covers-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/gP3l3ZOl76JWb40ZLdV7wPpzc.png",
        "alt": "Music Covers — slide 5",
        "role": "Album & Single Cover Artwork",
        "credits": "Selected Works · Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-16",
    "roman": "XVI",
    "slug": "plgthg-na-svalke",
    "client": "plgthg — na svalke",
    "year": "2024",
    "category": "Graphics",
    "description": "",
    "slots": [
      {
        "id": "plgthg-na-svalke-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/oVlEMwk8Iwo9lafi0y31BqW6MSU.jpg",
        "fullSrc": "https://framerusercontent.com/images/oVlEMwk8Iwo9lafi0y31BqW6MSU.jpg",
        "alt": "plgthg — na svalke — visual 1",
        "position": 1
      },
      {
        "id": "plgthg-na-svalke-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/EpNrAApimTMOk31vDF57ThCKCo.jpg",
        "fullSrc": "https://framerusercontent.com/images/EpNrAApimTMOk31vDF57ThCKCo.jpg",
        "alt": "plgthg — na svalke — visual 2",
        "position": 2
      }
    ],
    "slides": [
      {
        "id": "plgthg-na-svalke-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/oVlEMwk8Iwo9lafi0y31BqW6MSU.jpg",
        "alt": "plgthg — na svalke — slide 1",
        "role": "Visual Direction & Graphics",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "plgthg-na-svalke-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/EpNrAApimTMOk31vDF57ThCKCo.jpg",
        "alt": "plgthg — na svalke — slide 2",
        "role": "Visual Direction & Graphics",
        "credits": "Semyon Shvetsov"
      },
      {
        "id": "plgthg-na-svalke-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/s0Y6CDWGGGo9mvILyfn1LoAVuo.jpg",
        "alt": "plgthg — na svalke — slide 3",
        "role": "Visual Direction & Graphics",
        "credits": "Semyon Shvetsov"
      }
    ]
  },
  {
    "id": "client-17",
    "roman": "XVII",
    "slug": "metasystem-promo",
    "client": "Metasystem Promo",
    "year": "2024",
    "category": "Motion & Graphics",
    "description": "",
    "slots": [
      {
        "id": "metasystem-promo-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/leofF9Ub48T1y1XUjiRmNCarMBw.jpg",
        "fullSrc": "https://framerusercontent.com/images/leofF9Ub48T1y1XUjiRmNCarMBw.jpg",
        "alt": "Metasystem Promo — visual 1",
        "position": 1
      }
    ],
    "slides": [
      {
        "id": "metasystem-promo-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/leofF9Ub48T1y1XUjiRmNCarMBw.jpg",
        "alt": "Metasystem Promo — slide 1",
        "role": "Promo Visuals & Typeface Design",
        "credits": "Semyon Shvetsov"
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
