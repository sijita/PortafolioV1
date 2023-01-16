import { useGlobalContext } from "../hooks/useGlobalContext";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectsList from "../hooks/ProjectsList";

export default function Projects() {
  const { translated } = useGlobalContext();
  const { webProjects } = ProjectsList();

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
        {webProjects.map((project, index) => {
          return (
            <motion.div variants={item} key={index}>
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
