export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Owl & Geometric",
    category: "Realism",
    imageUrl: "/src/assets/3BADA399-84DC-42CE-B75A-E0C4858DD6E2.JPG",
    description: "Professional tattoo work"
  },
  {
    id: 2,
    title: "Lantern Design",
    category: "Blackwork",
    imageUrl: "/src/assets/944D2B1E-89C6-44C2-A789-71A22A16895C.JPG",
    description: "Intricate design"
  },
  {
    id: 6,
    title: "Portrait Art",
    category: "Fine Line",
    imageUrl: "/src/assets/IMG_4540.JPG",
    description: "Clean line work"
  },
  {
    id: 9,
    title: "Floral Design",
    category: "Fine Line",
    imageUrl: "/src/assets/IMG_6779.JPG",
    description: "Elegant work"
  },
  {
    id: 3,
    title: "Face Portrait",
    category: "Fine Line",
    imageUrl: "/src/assets/F35742BE-810B-4E9A-BF72-29097611E986.JPG",
    description: "Delicate artwork"
  },
  {
    id: 11,
    title: "Buddha",
    category: "Realism",
    imageUrl: "/src/assets/buda.jpeg",
    description: "Buddha tattoo"
  },
  {
    id: 5,
    title: "Skull Art",
    category: "Blackwork",
    imageUrl: "/src/assets/IMG_4319.JPG",
    description: "Complex patterns"
  },
  {
    id: 4,
    title: "Lion Portrait",
    category: "Realism",
    imageUrl: "/src/assets/IMG_1716.JPG",
    description: "Detailed piece"
  },
  {
    id: 7,
    title: "Warrior Design",
    category: "Realism",
    imageUrl: "/src/assets/IMG_5026.JPG",
    description: "High detail work"
  },
  {
    id: 8,
    title: "Dark Art",
    category: "Blackwork",
    imageUrl: "/src/assets/IMG_5279.JPG",
    description: "Artistic design"
  },
  {
    id: 10,
    title: "Mythical Creature",
    category: "Realism",
    imageUrl: "/src/assets/IMG_8164.JPG",
    description: "Professional artwork"
  },
  {
    id: 12,
    title: "Elephant",
    category: "Realism",
    imageUrl: "/src/assets/elephant.jpeg",
    description: "Elephant design"
  },
  {
    id: 13,
    title: "Harry Potter",
    category: "Realism",
    imageUrl: "/src/assets/Harry.jpeg",
    description: "Harry portrait"
  },
  {
    id: 14,
    title: "Nasus",
    category: "Blackwork",
    imageUrl: "/src/assets/nasus.jpeg",
    description: "Nasus design"
  },
  {
    id: 15,
    title: "Thor",
    category: "Realism",
    imageUrl: "/src/assets/thor.jpeg",
    description: "Thor artwork"
  },
  {
    id: 16,
    title: "Phoenix",
    category: "Fine Line",
    imageUrl: "/src/assets/zumru.jpeg",
    description: "Zumru design"
  }
];

export const artistInfo = {
  name: "Süleyman Değirmenci",
  location: "İSTANBUL / NİŞANTAŞI",
  bio: "My journey in the art of tattooing began in the sun-kissed coastal city of Alanya, Antalya, where I first discovered my passion for transforming skin into canvas. What started as a fascination with permanent art evolved into a dedicated craft, honed through years of practice and countless hours perfecting my technique. Today, I continue my artistic journey in the heart of Istanbul's prestigious Nişantaşı district, where I have the privilege of working with clients who trust me to bring their visions to life. Each piece I create is a collaboration between artist and canvas, a permanent testament to the stories we tell and the memories we preserve. My approach combines classical techniques with contemporary aesthetics, ensuring that every tattoo is not just art, but a timeless expression of individuality.",
  statement: "I believe in the power of permanent art to tell stories, preserve memories, and express the inexpressible. My approach combines classical techniques with contemporary aesthetics to create pieces that transcend trends.",
  specialties: ["Realism", "Blackwork", "Fine Line", "Geometric"],
  whatsapp: "+905534310982",
  instagram: "@soulinkk",
  email: "s.degrmc@gmail.com"
};
