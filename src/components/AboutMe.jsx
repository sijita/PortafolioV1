import fotoPersonal from "../images/fotoPersonal.jpg";
import { useGlobalContext } from "../hooks/useGlobalContext";
import DescriptionENG from "../components/DescriptionENG";
import DescriptionESP from "../components/DescriptionESP";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { translated } = useGlobalContext();
  return (
    <div className="container lg:p-20 p-10 mx-auto w-11/12">
      <motion.h1
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="inline-block text-white align-middle text-4xl font-semibold"
      >
        {translated ? "About me" : "Sobre mi"}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row justify-center items-center lg:items-start my-14 gap-20"
      >
        <div className="text-xl flex-1 text-gray-400">
          <div>{translated ? <DescriptionENG /> : <DescriptionESP />}</div>
        </div>
        <div className="flex-1">
          <img
            src={fotoPersonal}
            alt="Foto personal"
            className="mx-auto p-2 img-fluid 2xl:w-2/3 w-96"
            style={{
              border: "1px solid #baff29",
              borderImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
              borderImageSlice: "1",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
