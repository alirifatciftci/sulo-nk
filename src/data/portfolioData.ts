// Import images
import img1 from '../assets/3BADA399-84DC-42CE-B75A-E0C4858DD6E2.JPG';
import img2 from '../assets/944D2B1E-89C6-44C2-A789-71A22A16895C.JPG';
import img3 from '../assets/IMG_4540.JPG';
import img4 from '../assets/IMG_6779.JPG';
import img5 from '../assets/F35742BE-810B-4E9A-BF72-29097611E986.JPG';
import img6 from '../assets/buda.jpeg';
import img8 from '../assets/IMG_1716.JPG';
import img10 from '../assets/IMG_5279.JPG';
import img11 from '../assets/IMG_8164.JPG';
import img13 from '../assets/Harry.jpeg';
import img15 from '../assets/thor.jpeg';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 6,
    title: "Portrait Art",
    category: "Fine Line",
    imageUrl: img3,
    description: "Clean line work"
  },
  {
    id: 9,
    title: "Floral Design",
    category: "Fine Line",
    imageUrl: img4,
    description: "Elegant work"
  },
  {
    id: 8,
    title: "Dark Art",
    category: "Blackwork",
    imageUrl: img10,
    description: "Artistic design"
  },
  {
    id: 3,
    title: "Face Portrait",
    category: "Fine Line",
    imageUrl: img5,
    description: "Delicate artwork"
  },
  {
    id: 4,
    title: "Lion Portrait",
    category: "Realism",
    imageUrl: img8,
    description: "Detailed piece"
  },
  {
    id: 1,
    title: "Owl & Geometric",
    category: "Realism",
    imageUrl: img1,
    description: "Professional tattoo work"
  },
  {
    id: 2,
    title: "Lantern Design",
    category: "Blackwork",
    imageUrl: img2,
    description: "Intricate design"
  },
  {
    id: 11,
    title: "Buddha",
    category: "Realism",
    imageUrl: img6,
    description: "Buddha tattoo"
  },
  {
    id: 10,
    title: "Mythical Creature",
    category: "Realism",
    imageUrl: img11,
    description: "Professional artwork"
  },
  {
    id: 13,
    title: "Harry Potter",
    category: "Realism",
    imageUrl: img13,
    description: "Harry portrait"
  },
  {
    id: 15,
    title: "Thor",
    category: "Realism",
    imageUrl: img15,
    description: "Thor artwork"
  }
];

export const artistInfo = {
  name: "Süleyman Değirmenci",
  location: "İSTANBUL / NİŞANTAŞI",
  bio: "My journey in the art of tattooing began in Alanya, Antalya, where I discovered my passion for transforming skin into canvas. Today, I continue my artistic journey in Istanbul's prestigious Nişantaşı district, creating pieces that are a collaboration between artist and canvas, combining classical techniques with contemporary aesthetics.",
  statement: "I believe in the power of permanent art to tell stories, preserve memories, and express the inexpressible.",
  specialties: ["Realism", "Blackwork", "Fine Line", "Geometric"],
  whatsapp: "+905534310982",
  instagram: "@soulinkk",
  email: "s.degrmc@gmail.com"
};
