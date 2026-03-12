import { StaticImageData } from "next/image";
import Podcastr from "../../public/Podcastr.png";
import MessageImg from "../../public/Message.png";
import Dashadmin from "../../public/Dashadmin.png";
import RedditClone from "../../public/RedditClone.png";
import DragAndDrop from "../../public/DragAndDrop.png";
import Moveit from "../../public/Moveit.png";
import Brazuca from "../../public/brazuca.jpeg";
import FinanceControl from "../../public/financeControl.jpeg";

export type Project = {
  key: string;
  title: string;
  desc?: string;
  tags: string[];
  img: StaticImageData | null;
  alt: string;
  href: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    key: "finance-control",
    title: "Finance Control",
    tags: ["React", "TypeScript", "Styled Components"],
    img: FinanceControl,
    alt: "Finance Control",
    href: "https://dtmoney-finance-control-reactjs.vercel.app",
    featured: true,
  },
  {
    key: "dash-admin",
    title: "Dashadmin",
    desc: "Dashboard administrativo, gestão de usuários, gráficos de métricas e interface responsiva para controle de dados.",
    tags: ["Next.js", "ChakraUI"],
    img: Dashadmin,
    alt: "Dashadmin",
    href: "https://dashadmin-zeta.vercel.app/",
    featured: true,
  },
  {
    key: "messages",
    title: "Messages",
    tags: ["React", "TypeScript", "Sass", "Socket.io"],
    img: MessageImg,
    alt: "Messages",
    href: "https://dowhile-messages-reactjs.vercel.app/",
    featured: true,
  },
  {
    key: "brazuca",
    title: "Brazuca",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    img: Brazuca,
    alt: "Brazuca",
    href: "https://brazucas-front.vercel.app",
  },
  {
    key: "podcast",
    title: "Podcastr",
    desc: "Plataforma de streaming de podcasts com reprodução contínua, lista de episódios e interface otimizada para uma experiência imersiva de áudio.",
    tags: ["Next.js", "ChakraUI"],
    img: Podcastr,
    alt: "Podcastr",
    href: "https://podcastr-next-kevinmcruzp.vercel.app/",
  },
  {
    key: "reddit-clone",
    title: "Reddit Clone",
    desc: "Clone funcional do Reddit com autenticação via Firebase, criação de comunidades, posts, votos e feed em tempo real.",
    tags: ["Next.js", "ChakraUI", "Firebase"],
    img: RedditClone,
    alt: "Reddit Clone",
    href: "https://reddit-clone-nextjs-firebase-gamma.vercel.app/",
  },
  {
    key: "drag-and-drop",
    title: "Drag and Drop",
    tags: ["Next.js", "Tailwind"],
    img: DragAndDrop,
    alt: "Drag and Drop",
    href: "https://drag-and-drop-nextjs-teal.vercel.app/",
  },
  {
    key: "move-it",
    title: "MoveIt",
    tags: ["Next.js", "ChakraUI"],
    img: Moveit,
    alt: "MoveIt",
    href: "https://moveit-kevinmcruzp.vercel.app/",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
