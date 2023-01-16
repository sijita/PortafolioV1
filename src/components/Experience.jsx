import { useGlobalContext } from "../hooks/useGlobalContext";
import { motion } from "framer-motion";
import ExpList from "./ExpList";
import ExperienceList from "../hooks/ExperienceList";

export default function Experience() {
  const { translated } = useGlobalContext();
  const { expJobList, expFrontList } = ExperienceList();
  return (
    <div className="container w-11/12 p-10 mx-auto lg:p-20">
      <motion.h1
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="inline-block text-4xl font-semibold text-white"
      >
        {translated ? "Experience" : "Experiencia"}
      </motion.h1>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 justify-items-center mt-14">
        <ExpList {...expJobList} />
        <ExpList {...expFrontList} />
      </div>
    </div>
  );
}
