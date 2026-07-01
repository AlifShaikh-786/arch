export interface AwardItem {
  id: number;
  categoryType: "nasa" | "sports";
  sectionTitle: string;
  imgSrc: string;
  descriptionParagraphs: string[];
  longDescription?: string;
  date?: string;
  location?: string;
  year?: string;
}

export const gridData: AwardItem[] = [
  {
    id: 1,
    categoryType: "nasa",
    sectionTitle: "NASA Zonal Victory (2019)",
    imgSrc: "/award/nasa-awards-1.jpg",
    date: "October 2019",
    location: "Zonal NASA Convention",
    descriptionParagraphs: [
      `"The National Association of Students of Architecture (NASA India) is one of the largest Architectural Student Organizations in the world with student participants from more than two hundred colleges all over the India and countries around the world. The main objective of NASA India is to create a platform for architecture students to learn and interact, engage them directly and indirectly through both online and offline platforms.`,
      `NASA India conducts events, conventions, seminars, workshops, design competitions & trophies and many other activities. Millions of students have gone through the NASA India experience in its rich history since the year when it was founded in 1953." Our college became a part of NASA in the year 2013.`,
    ],
  },
  {
    id: 2,
    categoryType: "nasa",
    sectionTitle: "Convention Floor Exhibits",
    imgSrc: "/award/nasa-awards-3.jpg",
    date: "Annual Convention",
    location: "Convention Floor",
    descriptionParagraphs: [
      `During the presentation phase, our design thesis groups showcased pioneering sustainable building workflows that garnered widespread acclaim among standard judging panels. This benchmark platform has expanded horizons for structural exploration across upcoming semesters.`,
      `By bringing collaborative tools to standard blueprint models, our team continues to build a stellar network among domestic architecture chapters.`,
    ],
  },
  {
    id: 3,
    categoryType: "nasa",
    sectionTitle: "Inter-College Cricket Championship",
    imgSrc: "/award/nasa-awards-4.jpg",
    date: "Sports Meet 2021",
    location: "University Sports Arena",
    descriptionParagraphs: [
      `Our institution's sports contingent showcased exceptional strategy and absolute dominance on the pitch, securing the championship trophy after an intense final matchup. This victory crowns a stellar undefeated seasonal run across structural regional cricket modules.`,
      `The sports delegation continues to promote athletic synergy and technical training pipelines alongside core educational curricula.`,
    ],
  },
  {
    id: 4,
    categoryType: "nasa",
    sectionTitle: "Annual Athletics Meet",
    imgSrc: "/award/nasa-awards-5.jpg",
    date: "Zonal Athletics Meet",
    location: "Regional Sports Complex",
    descriptionParagraphs: [
      `Setting milestones across multiple sprint structures, our university sprinters earned multiple gold medallions at the zonal athletic interface. Individual performance brackets highlighted our rigorous speed optimization methods.`,
      `Dedicated coaching infrastructure has paved standard pathways for student athletic representations globally.`,
    ],
  },
  {
    id: 5,
    categoryType: "sports",
    sectionTitle: "Inter-College Cricket Championship",
    imgSrc: "/award/sports-awards-1.jpg",
    date: "Cricket Zonal League",
    location: "Regional Cricket Ground",
    descriptionParagraphs: [
      `"The National Association of Students of Architecture (NASA India) is one of the largest Architectural Student Organizations in the world with student participants from more than two hundred colleges all over the India and countries around the world. The main objective of NASA India is to create a platform for architecture students to learn and interact, engage them directly and indirectly through both online and offline platforms.`,
      `NASA India conducts events, conventions, seminars, workshops, design competitions & trophies and many other activities. Millions of students have gone through the NASA India experience in its rich history since the year when it was founded in 1953." Our college became a part of NASA in the year 2013.`,
    ],
  },
  {
    id: 6,
    categoryType: "sports",
    sectionTitle: "Convention Floor Exhibits",
    imgSrc: "/award/sports-awards-2.jpg",
    date: "Sports Exhibits Showcase",
    location: "Exhibition Hall A",
    descriptionParagraphs: [
      `During the presentation phase, our design thesis groups showcased pioneering sustainable building workflows that garnered widespread acclaim among standard judging panels. This benchmark platform has expanded horizons for structural exploration across upcoming semesters.`,
      `By bringing collaborative tools to standard blueprint models, our team continues to build a stellar network among domestic architecture chapters.`,
    ],
  },
  {
    id: 7,
    categoryType: "sports",
    sectionTitle: "Inter-College Cricket Championship",
    imgSrc: "/award/sports-awards-3.jpg",
    date: "Annual T-20 League",
    location: "City Stadium",
    descriptionParagraphs: [
      `Our institution's sports contingent showcased exceptional strategy and absolute dominance on the pitch, securing the championship trophy after an intense final matchup. This victory crowns a stellar undefeated seasonal run across structural regional cricket modules.`,
      `The sports delegation continues to promote athletic synergy and technical training pipelines alongside core educational curricula.`,
    ],
  },
  {
    id: 8,
    categoryType: "sports",
    sectionTitle: "Annual Athletics Meet",
    imgSrc: "/award/sports-awards-5.jpg",
    date: "Athletics Interface",
    location: "Zonal Athletics Stadium",
    descriptionParagraphs: [
      `Setting milestones across multiple sprint structures, our university sprinters earned multiple gold medallions at the zonal athletic interface. Individual performance brackets highlighted our rigorous speed optimization methods.`,
      `Dedicated coaching infrastructure has paved standard pathways for student athletic representations globally.`,
    ],
  },
];
