import { useGlobalContext } from "../hooks/useGlobalContext";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectsList from "../hooks/ProjectsList";

export default function Projects() {
  const { translated } = useGlobalContext();
  const { webProjects } = ProjectsList();

  return (
    <div className="container w-11/12 p-10 mx-auto lg:p-20">
      <motion.h1
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="inline-block text-4xl font-semibold text-white"
      >
        {translated ? "Projects" : "Proyectos"}
      </motion.h1>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 mt-14 justify-items-center">
        {webProjects.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
