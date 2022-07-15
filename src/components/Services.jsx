import { useGlobalContext } from "../hooks/useGlobalContext";
import { BiBadgeCheck, BiTrophy } from "react-icons/bi";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Services() {
  const { translated } = useGlobalContext();
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.5,
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
        transition={{ ease: "easeInOut", duration: 1 }}
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
        <Card
          item={item}
          title={translated ? "Awesome designs" : "Diseños increibles"}
          logo={<BiBadgeCheck className="text-4xl text-[#0a0a0a]" />}
          description={
            translated
              ? "Pages with creative and attractive designs"
              : "Páginas con diseños creativos y atractivos"
          }
        />
        <Card
          item={item}
          title="Web responsive"
          logo={
            <svg
              className="text-4xl text-[#0a0a0a]"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="256"
                height="480"
                x="128"
                y="16"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="45"
                rx="48"
                ry="48"
              ></rect>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="45"
                d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
              ></path>
            </svg>
          }
          description={
            translated
              ? "Pages adaptable to any type of device"
              : "Páginas adaptables a cualquier dispositivo"
          }
        />
        <Card
          item={item}
          title={translated ? "Performance" : "Rendimiento"}
          logo={
            <svg
              className="text-4xl text-[#0a0a0a]"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="40"
                d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"
              ></path>
            </svg>
          }
          description={
            translated
              ? "High performance pages"
              : "Páginas de alto rendimiento"
          }
        />
        <Card
          item={item}
          title="SEO"
          logo={<BiTrophy className="text-4xl text-[#0a0a0a]" />}
          description={
            translated
              ? "Optimized pages for good search engine positioning"
              : "Páginas con diseños creativos y atractivos"
          }
        />
      </motion.div>
    </div>
  );
}
