import { StaticImageData } from "next/image";
import Podcastr from "../../public/Podcastr.png";
import MessageImg from "../../public/Message.png";
import Dashadmin from "../../public/Dashadmin.png";
import RedditClone from "../../public/RedditClone.png";
import DragAndDrop from "../../public/DragAndDrop.png";
import Moveit from "../../public/Moveit.png";

export type Project = {
  key: string;
  title: string;
  tags: string[];
  img: StaticImageData | null;
  alt: string;
  href: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    key: "podcast",
    title: "Podcastr",
    tags: ["Next.js", "ChakraUI"],
    img: Podcastr,
    alt: "Podcastr",
    href: "https://podcastr-next-kevinmcruzp.vercel.app/",
    featured: true,
  },
  {
    key: "dash-admin",
    title: "Dashadmin",
    tags: ["Next.js", "ChakraUI"],
    img: Dashadmin,
    alt: "Dashadmin",
    href: "https://dashadmin-kevinmcruzp.vercel.app/",
    featured: true,
  },
  {
    key: "reddit-clone",
    title: "Reddit Clone",
    tags: ["Next.js", "ChakraUI", "Firebase"],
    img: RedditClone,
    alt: "Reddit Clone",
    href: "https://reddit-clone-nextjs-firebase-gamma.vercel.app/",
    featured: true,
  },
  {
    key: "messages",
    title: "Messages",
    tags: ["ReactJS", "Sass"],
    img: MessageImg,
    alt: "Messages",
    href: "https://dowhile-messages-reactjs.vercel.app/",
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
