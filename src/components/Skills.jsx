import ListItem from "./ListItem";
import { skillsList } from "../constants/skills"
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
        {skillsList.map((skill, index) => (
          <ListItem
            key={index}
            item={item}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </motion.ul>
    </div>
  );
}
