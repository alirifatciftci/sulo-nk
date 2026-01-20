// Import images
import img1 from '../assets/3BADA399-84DC-42CE-B75A-E0C4858DD6E2.JPG';
import img2 from '../assets/944D2B1E-89C6-44C2-A789-71A22A16895C.JPG';
import img3 from '../assets/IMG_4540.JPG';
import img4 from '../assets/IMG_6779.JPG';
import img5 from '../assets/F35742BE-810B-4E9A-BF72-29097611E986.JPG';
import img6 from '../assets/buda.jpeg';
import img7 from '../assets/IMG_4319.JPG';
import img8 from '../assets/IMG_1716.JPG';
import img9 from '../assets/IMG_5026.JPG';
import img10 from '../assets/IMG_5279.JPG';
import img11 from '../assets/IMG_8164.JPG';
import img12 from '../assets/elephant.jpeg';
import img13 from '../assets/Harry.jpeg';
import img14 from '../assets/nasus.jpeg';
import img15 from '../assets/thor.jpeg';
import img16 from '../assets/zumru.jpeg';

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
    id: 3,
    title: "Face Portrait",
    category: "Fine Line",
    imageUrl: img5,
    description: "Delicate artwork"
  },
  {
    id: 11,
    title: "Buddha",
    category: "Realism",
    imageUrl: img6,
    description: "Buddha tattoo"
  },
  {
    id: 5,
    title: "Skull Art",
    category: "Blackwork",
    imageUrl: img7,
    description: "Complex patterns"
  },
  {
    id: 4,
    title: "Lion Portrait",
    category: "Realism",
    imageUrl: img8,
    description: "Detailed piece"
  },
  {
    id: 7,
    title: "Warrior Design",
    category: "Realism",
    imageUrl: img9,
    description: "High detail work"
  },
  {
    id: 8,
    title: "Dark Art",
    category: "Blackwork",
    imageUrl: img10,
    description: "Artistic design"
  },
  {
    id: 10,
    title: "Mythical Creature",
    category: "Realism",
    imageUrl: img11,
    description: "Professional artwork"
  },
  {
    id: 12,
    title: "Elephant",
    category: "Realism",
    imageUrl: img12,
    description: "Elephant design"
  },
  {
    id: 13,
    title: "Harry Potter",
    category: "Realism",
    imageUrl: img13,
    description: "Harry portrait"
  },
  {
    id: 14,
    title: "Nasus",
    category: "Blackwork",
    imageUrl: img14,
    description: "Nasus design"
  },
  {
    id: 15,
    title: "Thor",
    category: "Realism",
    imageUrl: img15,
    description: "Thor artwork"
  },
  {
    id: 16,
    title: "Phoenix",
    category: "Fine Line",
    imageUrl: img16,
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
