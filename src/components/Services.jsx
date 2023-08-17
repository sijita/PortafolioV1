import { useGlobalContext } from "../hooks/useGlobalContext";
import Card from "./Card";
import { motion } from "framer-motion";
import ServicesList from "../hooks/ServicesList";

export default function Services() {
  const { translated } = useGlobalContext();
  const { servicesList } = ServicesList();
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container lg:p-20 p-10 mx-auto w-11/12">
      <motion.h1
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="inline-block text-white text-4xl font-semibold"
      >
        {translated ? "Services" : "Servicios"}
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-14 gap-5"
      >
        {servicesList.map((service, index) => {
          return <Card key={index} item={item} {...service} />;
        })}
      </motion.div>
    </div>
  );
}
