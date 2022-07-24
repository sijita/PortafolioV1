import { useGlobalContext } from "../hooks/useGlobalContext";
import { motion } from "framer-motion";
import screen from "../images/screen.jpg";
import screen3 from "../images/screen3.jpg";
import screen4 from "../images/screen4.jpg";
import screen5 from "../images/screen5.jpg";
import screen6 from "../images/screen6.jpeg";
import fullScreen2 from "../images/fullScreen4.png";
import fullScreen3 from "../images/fullscreen3.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { translated } = useGlobalContext();
  const container = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <div className="container w-11/12 p-10 mx-auto lg:p-20">
      <motion.h1
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="inline-block text-4xl font-semibold text-white"
      >
        {translated ? "Projects" : "Proyectos"}
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-20 md:grid-cols-2 mt-14 justify-items-center"
      >
        <motion.a
          variants={item}
          href="https://hotelambeyma.com/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectCard
            title={translated ? "Ambeyma hotel" : "Hotel Ambeyma"}
            screen={screen}
          />
        </motion.a>
        <motion.a
          variants={item}
          href="https://agrosoft.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectCard
            title={translated ? "Agrosoft" : "Agrosoft"}
            screen={screen6}
          />
        </motion.a>
        <motion.a
          variants={item}
          href={fullScreen3}
          rel="noreferrer"
          target="_blank"
        >
          <ProjectCard title="Ecommerce" screen={screen3} />
        </motion.a>
        <motion.a
          variants={item}
          href={fullScreen2}
          rel="noreferrer"
          target="_blank"
        >
          <ProjectCard
            title={translated ? "School page" : "Página escolar"}
            screen={screen4}
          />
        </motion.a>
        <motion.a
          variants={item}
          href="https://github.com/sijita/RickAndMortyAPI_RNative"
          rel="noreferrer"
          target="_blank"
          className="w-5/12"
        >
          <ProjectCard
            title={
              translated
                ? "Rick and Morty mobile app"
                : "Aplicación movil de Rick and Morty"
            }
            screen={screen5}
          />
        </motion.a>
      </motion.div>
    </div>
  );
}
