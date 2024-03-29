import { motion } from "framer-motion";

export default function ProjectCard({ screen, title, href }) {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={screen}
        className="p-2 m-0 sm:w-[580px] xl:h-[360px]"
        style={{
          border: "1px solid #baff29",
          borderImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          borderImageSlice: "1",
        }}
        alt="Proyecto personal"
      />
      <p className="text-center text-2xl mt-5 text-white">{title}</p>
    </motion.a>
  );
}
