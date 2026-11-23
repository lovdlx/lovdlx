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
    "slots": [
      {
        "id": "kintsugi-jewelry-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/V1TS935v2yI2tXch4Axefm6Sc.png",
        "fullSrc": "https://framerusercontent.com/images/V1TS935v2yI2tXch4Axefm6Sc.png",
        "alt": "Kintsugi Jewelry — visual 1",
        "position": 1
      },
      {
        "id": "kintsugi-jewelry-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1v1LjK59Yc25kqk67g2ZAbUmao.png",
        "fullSrc": "https://framerusercontent.com/images/1v1LjK59Yc25kqk67g2ZAbUmao.png",
        "alt": "Kintsugi Jewelry — visual 2",
        "position": 2
      },
      {
        "id": "kintsugi-jewelry-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/lv3F7PYT1uEU9kLIHxPUj4yqo.png",
        "fullSrc": "https://framerusercontent.com/images/lv3F7PYT1uEU9kLIHxPUj4yqo.png",
        "alt": "Kintsugi Jewelry — visual 3",
        "position": 3
      },
      {
        "id": "kintsugi-jewelry-s4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/715GbvvlEUFjqKc7x6A3dW9yidw.jpg",
        "fullSrc": "https://framerusercontent.com/images/715GbvvlEUFjqKc7x6A3dW9yidw.jpg",
        "alt": "Kintsugi Jewelry — visual 4",
        "position": 4
      }
    ],
    "slides": [
      {
        "id": "kintsugi-jewelry-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/V1TS935v2yI2tXch4Axefm6Sc.png",
        "alt": "Kintsugi Jewelry — slide 1",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "kintsugi-jewelry-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1v1LjK59Yc25kqk67g2ZAbUmao.png",
        "alt": "Kintsugi Jewelry — slide 2",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "kintsugi-jewelry-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/lv3F7PYT1uEU9kLIHxPUj4yqo.png",
        "alt": "Kintsugi Jewelry — slide 3",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "kintsugi-jewelry-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/715GbvvlEUFjqKc7x6A3dW9yidw.jpg",
        "alt": "Kintsugi Jewelry — slide 4",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "kintsugi-jewelry-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/27mg5HrvVr4HT6KibdnTe1MWI.png",
        "alt": "Kintsugi Jewelry — slide 5",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "kintsugi-jewelry-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/aPTst4bY9OR2YDN29IHbe8Ds0E.png",
        "alt": "Kintsugi Jewelry — slide 6",
        "role": "Brand Platform, Visual Identity & Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      }
    ]
  },
  {
    "id": "client-2",
    "roman": "II",
    "slug": "natura-siberica",
    "client": "Natura Siberica",
    "year": "2024",
    "category": "Packaging Design",
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
      },
      {
        "id": "natura-siberica-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/yrD1rG6XRyo6xVKyhBZmbMVTCwo.png",
        "fullSrc": "https://framerusercontent.com/images/yrD1rG6XRyo6xVKyhBZmbMVTCwo.png",
        "alt": "Natura Siberica — visual 3",
        "position": 3
      },
      {
        "id": "natura-siberica-s4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/aMydGSb6D324jTefSLaAXB1nA.png",
        "fullSrc": "https://framerusercontent.com/images/aMydGSb6D324jTefSLaAXB1nA.png",
        "alt": "Natura Siberica — visual 4",
        "position": 4
      }
    ],
    "slides": [
      {
        "id": "natura-siberica-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/SYwWdd0cmA51yDRsZjbhnLSsZs.png",
        "alt": "Natura Siberica — slide 1",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "natura-siberica-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/POhVhCz9dI9JfnCCCtGcaxx8U.png",
        "alt": "Natura Siberica — slide 2",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "natura-siberica-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/yrD1rG6XRyo6xVKyhBZmbMVTCwo.png",
        "alt": "Natura Siberica — slide 3",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "natura-siberica-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/aMydGSb6D324jTefSLaAXB1nA.png",
        "alt": "Natura Siberica — slide 4",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "natura-siberica-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/0eHgoaBK9IBeo5WLMNGnkzhJfY.png",
        "alt": "Natura Siberica — slide 5",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "natura-siberica-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/p2TGOqDa7NYN77EyvaRUA7CeXs.png",
        "alt": "Natura Siberica — slide 6",
        "role": "Packaging Concept, Visualization & Prepress",
        "credits": "Semyon Shvetsov — 2024"
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
      },
      {
        "id": "demix-x-aytlo-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/WzGKVYV0Bls6nOeUc51TgNZGrqM.png",
        "fullSrc": "https://framerusercontent.com/images/WzGKVYV0Bls6nOeUc51TgNZGrqM.png",
        "alt": "Demix × Outlaw — visual 3",
        "position": 3
      }
    ],
    "slides": [
      {
        "id": "demix-x-aytlo-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/PLK27lk25nedMzuFopexRzf2bNE.png",
        "alt": "Demix × Outlaw — slide 1",
        "role": "Campaign Visuals & Key Visuals",
        "credits": "Semyon Shvetsov — 2025"
      },
      {
        "id": "demix-x-aytlo-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/45WC9r0hm766ow49omjBlquIQ.jpg",
        "alt": "Demix × Outlaw — slide 2",
        "role": "Campaign Visuals & Key Visuals",
        "credits": "Semyon Shvetsov — 2025"
      },
      {
        "id": "demix-x-aytlo-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/WzGKVYV0Bls6nOeUc51TgNZGrqM.png",
        "alt": "Demix × Outlaw — slide 3",
        "role": "Campaign Visuals & Key Visuals",
        "credits": "Semyon Shvetsov — 2025"
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
      },
      {
        "id": "void-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/tuTAjKuddCY7xgM63oGAPrHWsbk.png",
        "fullSrc": "https://framerusercontent.com/images/tuTAjKuddCY7xgM63oGAPrHWsbk.png",
        "alt": "VOID — visual 3",
        "position": 3
      },
      {
        "id": "void-s4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/tQWp8diYbH664U0ZZ5uSe52NY.png",
        "fullSrc": "https://framerusercontent.com/images/tQWp8diYbH664U0ZZ5uSe52NY.png",
        "alt": "VOID — visual 4",
        "position": 4
      }
    ],
    "slides": [
      {
        "id": "void-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/SRxK8L7M7FoScWNF8xXROykZc.png",
        "alt": "VOID — slide 1",
        "role": "Brand Platform, Identity & Production",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "void-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/w2StFmS9WLrVrUMOlJXmpsjguE.png",
        "alt": "VOID — slide 2",
        "role": "Brand Platform, Identity & Production",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "void-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/tuTAjKuddCY7xgM63oGAPrHWsbk.png",
        "alt": "VOID — slide 3",
        "role": "Brand Platform, Identity & Production",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "void-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/tQWp8diYbH664U0ZZ5uSe52NY.png",
        "alt": "VOID — slide 4",
        "role": "Brand Platform, Identity & Production",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "void-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mdKULDkzFvkiqIzln1BHtoNHhh4.png",
        "alt": "VOID — slide 5",
        "role": "Brand Platform, Identity & Production",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "void-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/M6eILbTXt0xutkH96yxR3InjH3w.png",
        "alt": "VOID — slide 6",
        "role": "Brand Platform, Identity & Production",
        "credits": "Semyon Shvetsov — 2024"
      }
    ]
  },
  {
    "id": "client-5",
    "roman": "V",
    "slug": "9mice",
    "client": "9mice",
    "year": "2024",
    "category": "Art Direction & Key Visual",
    "slots": [
      {
        "id": "9mice-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/gkDwCbagAyyuiYKPZow2Io8D5Q.jpg",
        "fullSrc": "https://framerusercontent.com/images/gkDwCbagAyyuiYKPZow2Io8D5Q.jpg",
        "alt": "9mice — visual 1",
        "position": 1
      },
      {
        "id": "9mice-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/3IDnaDhZE6D7WGOqRoB0uRoNSoU.jpg",
        "fullSrc": "https://framerusercontent.com/images/3IDnaDhZE6D7WGOqRoB0uRoNSoU.jpg",
        "alt": "9mice — visual 2",
        "position": 2
      },
      {
        "id": "9mice-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1ozrI3Faqm8113RFdpQUcLZQI.jpg",
        "fullSrc": "https://framerusercontent.com/images/1ozrI3Faqm8113RFdpQUcLZQI.jpg",
        "alt": "9mice — visual 3",
        "position": 3
      }
    ],
    "slides": [
      {
        "id": "9mice-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/gkDwCbagAyyuiYKPZow2Io8D5Q.jpg",
        "alt": "9mice — slide 1",
        "role": "Event Visuals & Social Media Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "9mice-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/3IDnaDhZE6D7WGOqRoB0uRoNSoU.jpg",
        "alt": "9mice — slide 2",
        "role": "Event Visuals & Social Media Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "9mice-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1ozrI3Faqm8113RFdpQUcLZQI.jpg",
        "alt": "9mice — slide 3",
        "role": "Event Visuals & Social Media Art Direction",
        "credits": "Semyon Shvetsov — 2024"
      }
    ]
  },
  {
    "id": "client-6",
    "roman": "VI",
    "slug": "aperol",
    "client": "Aperol",
    "year": "2024",
    "category": "Brand Activation",
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
      },
      {
        "id": "aperol-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/A291h6Lrq6FsYpSiKGFnJguvSg.png",
        "fullSrc": "https://framerusercontent.com/images/A291h6Lrq6FsYpSiKGFnJguvSg.png",
        "alt": "Aperol — visual 3",
        "position": 3
      },
      {
        "id": "aperol-s4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/2CJ1G7ktXw8LjwCIIDvBmFsNvI.png",
        "fullSrc": "https://framerusercontent.com/images/2CJ1G7ktXw8LjwCIIDvBmFsNvI.png",
        "alt": "Aperol — visual 4",
        "position": 4
      }
    ],
    "slides": [
      {
        "id": "aperol-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/fri1n27wQOuJB7NDw5rIiA9dIE.png",
        "alt": "Aperol — slide 1",
        "role": "Brand Activation & Environmental Design",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "aperol-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/ffBoaFBGUgESplWykvwdUYdIoW4.png",
        "alt": "Aperol — slide 2",
        "role": "Brand Activation & Environmental Design",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "aperol-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/A291h6Lrq6FsYpSiKGFnJguvSg.png",
        "alt": "Aperol — slide 3",
        "role": "Brand Activation & Environmental Design",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "aperol-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/2CJ1G7ktXw8LjwCIIDvBmFsNvI.png",
        "alt": "Aperol — slide 4",
        "role": "Brand Activation & Environmental Design",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "aperol-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/OCwwUoSsTyZSu8qYvJUbh6zJZE.png",
        "alt": "Aperol — slide 5",
        "role": "Brand Activation & Environmental Design",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "aperol-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/cqDaSwdmczzTwr0iDHBfjmYBWWQ.png",
        "alt": "Aperol — slide 6",
        "role": "Brand Activation & Environmental Design",
        "credits": "Semyon Shvetsov — 2024"
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
      },
      {
        "id": "music-typography-research-book-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/W8mbxtLcbdTK1VN5NoK9lxhovlI.png",
        "fullSrc": "https://framerusercontent.com/images/W8mbxtLcbdTK1VN5NoK9lxhovlI.png",
        "alt": "Music Typography — visual 3",
        "position": 3
      },
      {
        "id": "music-typography-research-book-s4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/fpObAakgSaQvWC9TSm0fZDoDE.png",
        "fullSrc": "https://framerusercontent.com/images/fpObAakgSaQvWC9TSm0fZDoDE.png",
        "alt": "Music Typography — visual 4",
        "position": 4
      }
    ],
    "slides": [
      {
        "id": "music-typography-research-book-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/iW6HK8ofJ0QCCXCNaWYvbIHthU.png",
        "alt": "Music Typography — slide 1",
        "role": "Typography & Editorial Research Book",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "music-typography-research-book-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mPVfqBQOx72Wn9MoSlz685ze81w.png",
        "alt": "Music Typography — slide 2",
        "role": "Typography & Editorial Research Book",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "music-typography-research-book-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/W8mbxtLcbdTK1VN5NoK9lxhovlI.png",
        "alt": "Music Typography — slide 3",
        "role": "Typography & Editorial Research Book",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "music-typography-research-book-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/fpObAakgSaQvWC9TSm0fZDoDE.png",
        "alt": "Music Typography — slide 4",
        "role": "Typography & Editorial Research Book",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "music-typography-research-book-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/RS40LOxFkmJu9recmmIpxlLf5Y.png",
        "alt": "Music Typography — slide 5",
        "role": "Typography & Editorial Research Book",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "music-typography-research-book-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/HTroYnE19cRJyqr72lbcUex7g.png",
        "alt": "Music Typography — slide 6",
        "role": "Typography & Editorial Research Book",
        "credits": "Semyon Shvetsov — 2024"
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
    "slots": [
      {
        "id": "glofi-s1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/6V4gWyR0X2IP4mwfHQCvIDNJaao.png",
        "fullSrc": "https://framerusercontent.com/images/6V4gWyR0X2IP4mwfHQCvIDNJaao.png",
        "alt": "Glofi — visual 1",
        "position": 1
      },
      {
        "id": "glofi-s2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/PKfVggObweFPjEuvx21aUr4IDU.png",
        "fullSrc": "https://framerusercontent.com/images/PKfVggObweFPjEuvx21aUr4IDU.png",
        "alt": "Glofi — visual 2",
        "position": 2
      },
      {
        "id": "glofi-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/YBcjJL3a6cUQRveZbyFUkosMFKE.png",
        "fullSrc": "https://framerusercontent.com/images/YBcjJL3a6cUQRveZbyFUkosMFKE.png",
        "alt": "Glofi — visual 3",
        "position": 3
      },
      {
        "id": "glofi-s4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Oj3qT9sopUsaHEQyLeTL35s2dQ.png",
        "fullSrc": "https://framerusercontent.com/images/Oj3qT9sopUsaHEQyLeTL35s2dQ.png",
        "alt": "Glofi — visual 4",
        "position": 4
      }
    ],
    "slides": [
      {
        "id": "glofi-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/6V4gWyR0X2IP4mwfHQCvIDNJaao.png",
        "alt": "Glofi — slide 1",
        "role": "Brand Identity & Visual System",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "glofi-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/PKfVggObweFPjEuvx21aUr4IDU.png",
        "alt": "Glofi — slide 2",
        "role": "Brand Identity & Visual System",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "glofi-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/YBcjJL3a6cUQRveZbyFUkosMFKE.png",
        "alt": "Glofi — slide 3",
        "role": "Brand Identity & Visual System",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "glofi-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Oj3qT9sopUsaHEQyLeTL35s2dQ.png",
        "alt": "Glofi — slide 4",
        "role": "Brand Identity & Visual System",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "glofi-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/2YITc3SpewT0dL5LFW1T1ZIXeB8.png",
        "alt": "Glofi — slide 5",
        "role": "Brand Identity & Visual System",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "glofi-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/mLUEOY043XeZrKsWxBimPUlqlU.png",
        "alt": "Glofi — slide 6",
        "role": "Brand Identity & Visual System",
        "credits": "Semyon Shvetsov — 2024"
      }
    ]
  },
  {
    "id": "client-9",
    "roman": "IX",
    "slug": "zavernite",
    "client": "Zavernite",
    "year": "2024",
    "category": "Brand Identity",
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
      },
      {
        "id": "zavernite-s3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1NVD1IcspKgqbEgPTBsy3e0nLb0.jpg",
        "fullSrc": "https://framerusercontent.com/images/1NVD1IcspKgqbEgPTBsy3e0nLb0.jpg",
        "alt": "Zavernite — visual 3",
        "position": 3
      },
      {
        "id": "zavernite-s4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1QVIotrAqAhKsCAMQz4DwVrNk1Y.jpg",
        "fullSrc": "https://framerusercontent.com/images/1QVIotrAqAhKsCAMQz4DwVrNk1Y.jpg",
        "alt": "Zavernite — visual 4",
        "position": 4
      }
    ],
    "slides": [
      {
        "id": "zavernite-sl1",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1Vkmg9ur3ieqaKscM0RwtwBtiM.jpg",
        "alt": "Zavernite — slide 1",
        "role": "Visual Identity & Packaging",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "zavernite-sl2",
        "kind": "image",
        "src": "https://framerusercontent.com/images/vCs8pgMpdYD5j4hOwCKJpmWpWY.jpg",
        "alt": "Zavernite — slide 2",
        "role": "Visual Identity & Packaging",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "zavernite-sl3",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1NVD1IcspKgqbEgPTBsy3e0nLb0.jpg",
        "alt": "Zavernite — slide 3",
        "role": "Visual Identity & Packaging",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "zavernite-sl4",
        "kind": "image",
        "src": "https://framerusercontent.com/images/1QVIotrAqAhKsCAMQz4DwVrNk1Y.jpg",
        "alt": "Zavernite — slide 4",
        "role": "Visual Identity & Packaging",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "zavernite-sl5",
        "kind": "image",
        "src": "https://framerusercontent.com/images/Akw87Xq4D7kgQ5lxO29Z7WUA8.jpg",
        "alt": "Zavernite — slide 5",
        "role": "Visual Identity & Packaging",
        "credits": "Semyon Shvetsov — 2024"
      },
      {
        "id": "zavernite-sl6",
        "kind": "image",
        "src": "https://framerusercontent.com/images/vJbNhJi3VqUentpgTkOCj1JCPzk.jpg",
        "alt": "Zavernite — slide 6",
        "role": "Visual Identity & Packaging",
        "credits": "Semyon Shvetsov — 2024"
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
