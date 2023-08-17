import { useGlobalContext } from "../hooks/useGlobalContext";
import { motion } from "framer-motion";

export default function ExpList({ engTitle, espTitle, year, works }) {
  const { translated } = useGlobalContext();
  const container = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };
  return (
    <div className="flex flex-col gap-2">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "linear",
          delay: 0.5,
        }}
        className="text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
      >
        {translated ? engTitle : espTitle}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "linear",
          delay: 0.5,
        }}
        className="text-xl text-center"
      >
        {year}
      </motion.h3>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xl flex flex-col gap-8 my-10 text-gray-400"
      >
        {works}
      </motion.ul>
    </div>
  );
}
