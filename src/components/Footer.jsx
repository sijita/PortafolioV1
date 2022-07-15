import { FiFacebook, FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Footer() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <footer className="overflow-hidden">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex sm:hidden gap-8 list-none justify-center"
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
      </motion.ul>
    </footer>
  );
}
