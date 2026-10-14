export interface ContinuityPair {
  id: string;
  discipline: 'photography' | 'music' | 'fashion' | 'design';
  disciplineLabel: string;
  historicTitle: string;
  historicCreator: string;
  historicYear: string;
  historicImage: string;
  historicContext: string;
  contemporaryTitle: string;
  contemporaryCreator: string;
  contemporaryYear: string;
  contemporaryImage: string;
  contemporaryContext: string;
  lineageAnalysis: string;
}

export const CONTINUITY_PAIRS: ContinuityPair[] = [
  {
    id: "cont-01",
    discipline: "music",
    disciplineLabel: "Music & Sonic Genealogy",
    historicTitle: "Highlife Ballrooms & Brass Horns",
    historicCreator: "Cardinal Rex Jim Lawson & His Mayors Band",
    historicYear: "1962 (Lagos / Port Harcourt)",
    historicImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    historicContext: "Mid-century ballroom highlife fused lyrical trumpet solos with palmwine guitar, voicing the dignity and optimism of sovereign West Africa.",
    contemporaryTitle: "Oje Acoustic Highlife Revival",
    contemporaryCreator: "The Cavemen (Kingsley & Benjamin Okorie)",
    contemporaryYear: "2020s (Lagos / Global)",
    contemporaryImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80",
    contemporaryContext: "Two brothers playing live bass and drums revive analog highlife polyrhythms for streaming Gen Z audiences, rejecting quantized electronic beats in favor of warm organic groove.",
    lineageAnalysis: "Rather than treating highlife as a museum relic, contemporary practitioners re-center the live human pulse and polyrhythmic syncopation of the 1960s big bands.",
  },
  {
    id: "cont-02",
    discipline: "fashion",
    disciplineLabel: "Fashion & Textile Architecture",
    historicTitle: "The Modernized Zipper Iro & Buba",
    historicCreator: "Chief Shade Thomas-Fahm",
    historicYear: "1960s (Shade's Boutique, Broad Street, Lagos)",
    historicImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    historicContext: "Thomas-Fahm freed women from complex fabric folding by engineering pre-sewn pleats, concealed zippers, and structured boubou necklines using local textiles.",
    contemporaryTitle: "Handwoven Aso-Oke Architectural Suiting",
    contemporaryCreator: "Kenneth Ize (Paris Fashion Week / Kwara Guilds)",
    contemporaryYear: "2020s (Lagos / Paris)",
    contemporaryImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
    contemporaryContext: "Kenneth Ize collaborates directly with master women weavers in Ilorin, transforming sacred striped Aso-Oke cloth into sharp, international tailoring worn worldwide.",
    lineageAnalysis: "Both designers anchor modern luxury in indigenous labor, dismantling Western assumptions that African textiles belong in craft markets rather than haute couture.",
  },
  {
    id: "cont-03",
    discipline: "photography",
    disciplineLabel: "Photography & The Gaze",
    historicTitle: "Studio Isolation & Hair Architecture",
    historicCreator: "J.D. 'Okhai Ojeikere",
    historicYear: "1970s (Lagos Studios)",
    historicImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    historicContext: "Silver gelatin documentary isolating the crown of Nigerian women, elevating cultural styling into timeless fine art.",
    contemporaryTitle: "Vibrant Color & Street Dandyism",
    contemporaryCreator: "Stephen Tayo & Ruth Ossai",
    contemporaryYear: "2020s (Lagos / London)",
    contemporaryImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80",
    contemporaryContext: "Contemporary studio portraits celebrating twinhood (Ibeji), local subcultures, and church Sunday fashion with saturated backdrops and unapologetic local pride.",
    lineageAnalysis: "A direct aesthetic thread connects the rigorous spatial dignity of Ojeikere's black-and-white framing with the electric chroma and hyper-stylized portraiture of today's Lagosian photographers.",
  },
  {
    id: "cont-04",
    discipline: "design",
    disciplineLabel: "Design & National Identity",
    historicTitle: "FESTAC '77 Identity & Erhabor Emokpae Emblem",
    historicCreator: "Erhabor Emokpae & National Participation Committee",
    historicYear: "1977 (Lagos / Kaduna)",
    historicImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
    historicContext: "A unified graphic system centered on the 16th-century Benin Queen Idia ivory mask, symbolizing Black sovereign unity across 56 nations.",
    contemporaryTitle: "Digital African Typography & Visual Systems",
    contemporaryCreator: "Contemporary Nigerian Digital Studios",
    contemporaryYear: "2020s (Yaba Tech Cluster, Lagos)",
    contemporaryImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    contemporaryContext: "Digital type foundries and brand identities drawing directly upon Nsibidi ideograms, Yoruba adire stencils, and letterpress heritage for global tech and cultural platforms.",
    lineageAnalysis: "African design systems have moved from hand-carved lino blocks to digital type engines without losing their sacred geometry or political courage.",
  },
];
