import { useGlobalContext } from "../hooks/useGlobalContext";
import logo from "../images/logo.png";
import { motion } from "framer-motion";

export default function Header() {
  const { translated } = useGlobalContext();

  return (
    <header className="flex flex-col items-center justify-center h-screen overflow-hidden gap-10">
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          src={logo}
          alt="Logo"
          className="w-64 sm:w-80 lg:w-96 xl:w-[500px]"
        />
      </div>
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="text-md sm:text-2xl xl:text-4xl font-thin tracking-[.15em] text-white/50"
        >
          <span className="text-primary">(</span>
          SIMÓN JIMÉNEZ TAMAYO
          <span className="text-primary">)</span>
        </motion.p>
      </div>
      <motion.div layout className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          className={`${
            translated &&
            "order-last bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f] tracking-normal"
          } text-5xl sm:text-7xl lg:text-9xl xl:text-[175px] font-bold tracking-tight text-white py-2`}
        >
          {translated ? "Developer" : "Desarrollador"}
        </motion.p>
        <div className="flex gap-5">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className={`${
              translated
                ? "order-first text-white tracking-tight"
                : "bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
            } text-5xl sm:text-7xl lg:text-9xl xl:text-[175px] font-bold leading-none`}
          >
            Front
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
            className={`${
              translated
                ? "order-first text-white tracking-tight"
                : "bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
            } text-5xl sm:text-7xl lg:text-9xl xl:text-[175px] font-bold leading-none`}
          >
            -
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className={`${
              translated
                ? "order-first text-white tracking-tight"
                : "bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
            } text-5xl sm:text-7xl lg:text-9xl xl:text-[175px] font-bold leading-none`}
          >
            End
          </motion.p>
        </div>
      </motion.div>
    </header>
  );
}
