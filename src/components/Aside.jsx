import { FiFacebook, FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { motion } from "framer-motion";

export default function Aside() {
  const { handleTranslate } = useGlobalContext();

  const container = {
    hidden: { opacity: 0, y: 1000 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.4,
        staggerDirection: -1,
        type: "tween",
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <aside className="z-50 absolute">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center hidden sm:flex flex-col gap-8 fixed list-none bottom-0 left-5"
      >
        <motion.li variants={item}>
          <a
            href="https://www.facebook.com/simon.jimeneztamayo/"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook className="text-2xl text-slate-400 hover:stroke-[#8cf72b]" />
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a
            href="https://api.whatsapp.com/send?phone=573193139280&text=Hola!%20Vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20una%20p%C3%A1gina."
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp className="text-2xl text-slate-400 hover:fill-[#8cf72b]" />
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a
            href="https://www.instagram.com/simonjimenezt/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram className="text-2xl text-slate-400 hover:fill-[#8cf72b]" />
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="https://github.com/sijita" target="_blank" rel="noreferrer">
            <FiGithub className="text-2xl text-slate-400 hover:stroke-[#8cf72b]" />
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a
            href="https://www.linkedin.com/in/simon-jimenez-tamayo/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxLine className="text-2xl text-slate-400 hover:fill-[#8cf72b]" />
          </a>
        </motion.li>
        <motion.li variants={item}>
          <hr
            width="1"
            className="mx-auto h-44 bg-gradient-to-b from-[#BAFF29] to-[#3fea2f]"
          />
        </motion.li>
      </motion.ul>
      <ul className="text-center hidden sm:flex flex-col gap-8 fixed bottom-0 right-5 list-none">
        <li>
          <button onClick={handleTranslate}>
            <BsTranslate className="text-2xl text-slate-400 hover:fill-[#8cf72b]" />
          </button>
        </li>
        <li>
          <hr
            width="1"
            className="mx-auto h-44 bg-gradient-to-b from-[#BAFF29] to-[#3fea2f]"
          />
        </li>
      </ul>
    </aside>
  );
}
