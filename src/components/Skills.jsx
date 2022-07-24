import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import ListItem from "./ListItem";
import { motion } from "framer-motion";

export default function Skills() {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <div className="container w-11/12 p-10 mx-auto text-center lg:p-20">
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="text-4xl font-semibold text-white"
      >
        Skills
      </motion.h2>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 my-14"
      >
        <ListItem
          item={item}
          name="HTML5"
          icon={<DiHtml5 className="fill-[#8cf72b] text-2xl" />}
        />
        <ListItem
          item={item}
          name="CSS3"
          icon={<DiCss3 className="fill-[#8cf72b] text-2xl" />}
        />
        <ListItem
          item={item}
          name="JavaScript"
          icon={<DiJavascript className="fill-[#8cf72b] text-2xl" />}
        />
        <ListItem
          item={item}
          name="BootStrap"
          icon={<DiBootstrap className="fill-[#8cf72b] text-2xl" />}
        />
        <ListItem
          item={item}
          name="Tailwindcss"
          icon={<SiTailwindcss className="fill-[#8cf72b]" />}
        />
        <ListItem
          item={item}
          name="ReactJS"
          icon={<DiReact className="fill-[#8cf72b] text-2xl" />}
        />
        <ListItem
          item={item}
          name="React Native"
          icon={<DiReact className="fill-[#8cf72b] text-2xl" />}
        />
        <ListItem
          item={item}
          name="Photoshop"
          icon={<SiAdobephotoshop className="fill-[#8cf72b] text-lg" />}
        />
        <ListItem
          item={item}
          name="Figma"
          icon={<FiFigma className="stroke-[#8cf72b] text-xl" />}
        />
        <ListItem
          item={item}
          name="Github"
          icon={<AiFillGithub className="fill-[#8cf72b] text-2xl" />}
        />
      </motion.ul>
    </div>
  );
}
