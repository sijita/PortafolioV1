import { SiTailwindcss, SiAdobephotoshop, SiTypescript } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { CgFramer } from "react-icons/cg";

export const skillsList = [
  {
    name: "HTML5",
    icon: <DiHtml5 className="fill-[#8cf72b] text-2xl" />,
  },
  {
    name: "CSS3",
    icon: <DiCss3 className="fill-[#8cf72b] text-2xl" />,
  },
  {
    name: "JavaScript",
    icon: <DiJavascript className="fill-[#8cf72b] text-2xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="fill-[#8cf72b] text-lg" />,
  },
  {
    name: "BootStrap",
    icon: <DiBootstrap className="fill-[#8cf72b] text-2xl" />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss className="fill-[#8cf72b]" />,
  },
  {
    name: "ReactJS",
    icon: <DiReact className="fill-[#8cf72b] text-2xl" />,
  },
  {
    name: "React Native",
    icon: <DiReact className="fill-[#8cf72b] text-2xl" />,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="fill-[#8cf72b] text-lg" />,
  },
  {
    name: "Figma",
    icon: <FiFigma className="stroke-[#8cf72b] text-xl" />,
  },
  {
    name: "Github",
    icon: <AiFillGithub className="fill-[#8cf72b] text-xl" />,
  },
  {
    name: "Framer Motion",
    icon: <CgFramer className="text-[#8cf72b] text-2xl" />,
  },
];
