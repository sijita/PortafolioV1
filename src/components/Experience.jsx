import { BiChevronRight } from "react-icons/bi";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { motion } from "framer-motion";
import ExpList from "./ExpList";

export default function Experience() {
  const { translated } = useGlobalContext();
  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
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
        {translated ? "Experience" : "Experiencia"}
      </motion.h1>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 justify-items-center mt-14 ">
        <ExpList
          engTitle="Graphic designer"
          espTitle="Diseñador gráfico"
          year={translated ? "2013 - Present" : "2013 - Presente"}
          works={
            <>
              <motion.li variants={item} className="flex items-center gap-5">
                <BiChevronRight className="text-3xl min-w-max fill-[#8cf72b]" />
                {translated
                  ? "Creation of posters and flyers for different parties and events"
                  : "Creación de posters y flyers para diferentes fiestas y eventos"}
              </motion.li>
              <motion.li variants={item} className="flex items-center gap-5">
                <BiChevronRight className="text-3xl min-w-max fill-[#8cf72b]" />
                {translated
                  ? "Creation of logos for individuals and small businesses"
                  : "Creación de logos para personas y pequeñas empresas"}
              </motion.li>
              <motion.li variants={item} className="flex items-center gap-5">
                <BiChevronRight className="text-3xl min-w-max fill-[#8cf72b]" />
                {translated
                  ? "Creation and editing of videos for YouTube channels"
                  : "Creación y edición de videos para canales de YouTube"}
              </motion.li>
            </>
          }
        />
        <ExpList
          engTitle="Front developer"
          espTitle="Desarrollador front"
          year={translated ? "2013 - Present" : "2013 - Presente"}
          works={
            <>
              <motion.li variants={item} className="flex items-center gap-5">
                <BiChevronRight className="text-3xl min-w-max fill-[#8cf72b]" />
                {translated
                  ? "Ambeyma hotel website"
                  : "Página web hotelera Ambeyma"}
              </motion.li>
              <motion.li variants={item} className="flex items-center gap-5">
                <BiChevronRight className="text-3xl min-w-max fill-[#8cf72b]" />
                {translated
                  ? "Agrosoft"
                  : "Agrosoft"}
              </motion.li>
              <motion.li variants={item} className="flex items-center gap-5">
                <BiChevronRight className="text-3xl min-w-max fill-[#8cf72b]" />
                {translated ? "Personal projects" : "Proyectos personales"}
              </motion.li>
            </>
          }
        />
      </div>
    </div>
  );
}
